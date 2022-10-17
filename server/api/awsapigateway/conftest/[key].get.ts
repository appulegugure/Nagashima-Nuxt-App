export default defineEventHandler(async(event) => {
    const s3FetchKey = event.context.params.key
    const content = await $fetch(`https://content-buket.s3.us-west-2.amazonaws.com/test-batonprojects.json`,{ 
        parseResponse: JSON.parse,
    })

    return content
})
