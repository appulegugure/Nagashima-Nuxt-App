// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

export default defineEventHandler(async (event) => {
    // dotenv.config()
    // パスパラメータの取得
    const config = useRuntimeConfig()
    const s3FetchKey = event.context.params.key
    const content = await $fetch(`/${s3FetchKey}`,{ 
        // baseURL:process.env.S3CONTENT_GET_KEY,
        baseURL:config.public.S3CONTENT_API_GET,
        parseResponse: JSON.parse,
    })
    return {
        data:content
    }
})