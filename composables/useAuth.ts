import {
  getAuth,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from 'firebase/auth'

export const useAuth = () => {
  const token = useState<string>('token', () => '')
  const creemail = useState<string>('email', () => '')

  async function signIn(email: string, password: string) {
    return await new Promise<void>(async(resolve, reject) => {
      const auth = getAuth()
      return signInWithEmailAndPassword(auth, email, password)

      .then((userCredential) => {
          creemail.value = (userCredential.user.email)?userCredential.user.email:''
          userCredential.user
            .getIdToken()
            .then((idToken) => {
              token.value = idToken
              resolve()
            })
            .catch((err)=>{
              console.log('Get Token Error',err)
              reject()
            })
            resolve()
        })
        .catch((err)=>{
          console.log('SignInError',err)
          navigateTo('/')
          reject()
        })

    })
  }

  async function signOut() {
    return await new Promise<void>((resolve, reject) => {
      const auth = getAuth()
      firebaseSignOut(auth)
        .then(() => {
          token.value = ''
          creemail.value = ''
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  async function createUser(email: string, password: string){
    return await new Promise<void>(async (resolve, reject) => {
      const auth = getAuth()
      return createUserWithEmailAndPassword(auth, email, password)
      
      .then((userCredential) => {
        creemail.value = (userCredential.user.email)?userCredential.user.email:''
        userCredential.user
            .getIdToken()
            .then((idToken) => {
              token.value = idToken
              resolve()
            })
            .catch(reject)
        })
        .catch(reject)
    })
  }

  async function checkAuthState() {
    return await new Promise<void>((resolve, reject) => {
      // client only
      if (process.server) return resolve()
      const auth = getAuth()
      onAuthStateChanged(auth,
        (user) => {
          if (user) {
            user
              .getIdToken()
              .then((idtoken) => {
                token.value = idtoken
                resolve()
              })
              .catch(reject)
          } else {
            token.value = 'false'
            creemail.value = ''
            resolve()
          }
        
        },
        (error) => {
          reject(error)
        }
      )
    })
  }

  return {
    signIn,
    signOut,
    token,
    creemail,
    checkAuthState,
    createUser
  }
}