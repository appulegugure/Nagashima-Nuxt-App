export default defineEventHandler(async (event) => {

    const body = await useBody(event)
    const contentType = event.req.headers["content-type"]
    console.log('BODY',body)
    console.log('content-type',contentType)
    const content = await $fetch('http://34.210.165.213:8080/post',{ 
          // memo
          //AWS SERVER ~>> 'https://pz3dnfwt2g.execute-api.us-west-2.amazonaws.com/test2/post'
          //GO  SERVER ~>> 'http://34.219.72.146:8080/post'

          headers: {
            'Content-Type': `${contentType}` 
          },
          method:'post',
          body:body,
        })

    // const body = await useBody(event)

    return {
        data:content
    }
})