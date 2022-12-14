export default defineEventHandler(async(event) => {
    const content = await $fetch('http://34.210.165.213:8080/all_genre',{ 
        parseResponse: JSON.parse,
        method:'get'
    })
    return {
      data:content
    }
})
