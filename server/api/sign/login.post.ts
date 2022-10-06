export default defineEventHandler(async (event) => {
  const body = await useBody(event)
  return {
      accessToken: body.email,
    };
});