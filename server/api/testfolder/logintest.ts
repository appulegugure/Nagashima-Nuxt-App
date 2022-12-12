// import { AppCompoCenterContent } from "~~/.nuxt/components"

export default defineEventHandler(async (event) => {

    const content = await $fetch(`http://34.210.165.213:8080/login`,{ 

        parseResponse: JSON.parse,
        method: 'POST', 
        body: {
            "username":"test",
            "password":"test"
        }
    })

    return {
        data:content
    }
})