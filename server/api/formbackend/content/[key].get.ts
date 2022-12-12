export default defineEventHandler(async(event) => {
    console.log('abckend Api')
    const backendFetchKey = event.context.params.key
    console.log('SSSS',backendFetchKey)
    const content = await $fetch(`http://34.210.165.213:8080/get_aricle${backendFetchKey}`,{ 
        parseResponse: JSON.parse,
        method:'get'
    })
    console.log('xxX CONTENT APi Xxx', content)

    return content
})
