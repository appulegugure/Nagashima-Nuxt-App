import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

export default defineEventHandler(async (event) => {
    dotenv.config()
    // パスパラメータの取得

    const content = await $fetch(`${process.env.S3CONTENT_GET_KEY}`,{
        parseResponse: JSON.parse 
    })
    return {
        data:content
    }

})