
export const Dbauth = () => {
  async function registerName(name:string){
    return await new Promise<void>(async (resolve, reject) => {
      return fetch('').then(()=>{resolve()}).catch((err)=>{reject()})
    })
  }
}