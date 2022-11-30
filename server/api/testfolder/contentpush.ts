export default defineEventHandler(async (event) => {

    // const content = await $fetch(`https://pz3dnfwt2g.execute-api.us-west-2.amazonaws.com/test2/login`,{ 
      
    //     parseResponse: JSON.parse,
    //     method: 'POST', 
    //     body: {
    //       "username":"admin",
    //       "password":"admin"
    //     }
    // })

    const body = await useBody(event)
    const contentType = event.req.headers["content-type"]
    console.log('server put',body)
    console.log('serve event req',event.req.headers["content-type"])
    const content = await $fetch('https://pz3dnfwt2g.execute-api.us-west-2.amazonaws.com/test2/post',{ 
          // parseResponse: JSON.parse,
          headers: {
            'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryoRjipBhw2FP411cB' 
          },
          method:'post',
          body:body,
        })

    // const body = await useBody(event)

    return {
        data:content
    }
})