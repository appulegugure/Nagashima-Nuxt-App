import { AppCompoCenterContent } from "~~/.nuxt/components"

export default defineEventHandler(async (event) => {

    const content = await $fetch(`https://pz3dnfwt2g.execute-api.us-west-2.amazonaws.com/test2/login`,{ 
      
        parseResponse: JSON.parse,
        method: 'POST', 
        body: {
          "username":"admin",
          "password":"admin"
        }
    })

    return {
        data:content
    }
})