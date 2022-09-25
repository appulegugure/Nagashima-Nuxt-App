export const apiGet = () => {
  
  // Get content objects from S3 bucket with DynamoDB
  const s3ObjectsGetApi = 'https://7p6bvpmzy5.execute-api.us-west-2.amazonaws.com/dev/items'
  return{
    s3ObjectsGetApi,
  }

}