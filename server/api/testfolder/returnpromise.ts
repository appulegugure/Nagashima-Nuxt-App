export default defineEventHandler(async (event) => {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
          resolve({'number':1});
      }, 10000);
    })

})