export default defineEventHandler(async (event) => {
    // パスパラメータの取得
    const s3FetchKey = event.context.params.key
    const content = await $fetch(`/${s3FetchKey}`,{ 
        baseURL:process.env.S3CONTENT_GET_KEY,
        parseResponse: JSON.parse 
    })
    return {
        data:content
    }
})