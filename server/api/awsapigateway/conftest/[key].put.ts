export default defineEventHandler(async(event) => {
  const config = useRuntimeConfig()
  const body = await useBody(event)
  console.log('server put',body)
  const s3FetchKey = event.context.params.key
  const content = await $fetch(`/${s3FetchKey}`,{ 
        baseURL:config.public.content_test,
        parseResponse: JSON.parse,
        method:'put',
    })
})
