export default defineEventHandler(async (event) => {

  const query = useQuery(event)
  console.log('GET',query)
  return {
      accessToken: "dummy token",
    };
});