import type { Ref } from "vue";
export const useAuth = () => {

  // Cookie for User-Email 
  const cookieEmail = useCookie<string|null>("access_email",{
    maxAge:3600,
    // httpOnly:true,
    secure:true
  });

  // Cookie for Token
  const cookieToken = useCookie<string|null>("access_token",{
    maxAge:3600,
    // httpOnly:true,
    secure:true
  });

  const initialValue = cookieEmail.value ? true : false;

  // cookie for userEmail の初期化
  const initialLoginUser = cookieEmail.value? cookieEmail.value : null
  // cookie for userToken の初期化
  const initialLoginUserToken = cookieToken.value? cookieToken.value : null

  const loggedIn = useState("loggedIn", () => initialValue);
  const loggedInUser = useState<string|null>("loggedInUser", ()=> initialLoginUser )
  const loggedInUserToken = useState<string|null>("loggedInUserToken", ()=> initialLoginUserToken )
  const inputEmail = useState<string|null>("email", () => null)
  const inputPassword = useState<string|null>("password", () => null)
  const inputToken = useState<string|null>("token", () => null)

  const login = (loggedIn: Ref<boolean>, loggedInUser: Ref<string|null>, loggedInUserToken: Ref<string|null>, email:Ref<string|null>, password:Ref<string|null>, token:Ref<string|null>) => async () => {
    const data = await $fetch("/api/sign/login",{
      method: 'POST',
      // headers: {
      //   token: token
      // },
      body: {
        email: email.value,
        password: password.value,
        token: token.value
      }
  });
    cookieEmail.value = data.accessToken;
    loggedIn.value = true;
    loggedInUser.value = cookieEmail.value
    loggedInUserToken.value =  cookieToken.value
    return true;
  };

  const logout = (loggedIn: Ref<boolean>, loggedInUser: Ref<string|null>, loggedInUserToken: Ref<string|null>, email:Ref<string|null>, password:Ref<string|null>, token:Ref<string|null>) => async () => {
    loggedIn.value = false;
    cookieEmail.value = null;
    cookieToken.value = null;
    loggedInUser.value = cookieEmail.value;
    loggedInUserToken.value =  cookieToken.value;
  
  };

  const getEmail = () => {
    return cookieEmail.value;
  };

  const getToken = () => {
    return cookieToken.value;
  };

  const setEmail = (formInputEmail: Ref<string|null>) => {
    inputEmail.value = formInputEmail.value
  }

  const setPassword = (formInputPassword: Ref<string|null>) => {
    inputPassword.value = formInputPassword.value
  }

  const setToken = (formInputToken: Ref<string|null>) => {
    inputToken.value = formInputToken.value
  }

  return {
      cookieEmail,
      cookieToken,
      setEmail,
      setPassword,
      setToken,
      loggedInUser,
      loggedIn,
      getToken,
      getEmail,
      login: login(loggedIn, loggedInUser, loggedInUserToken, inputEmail, inputPassword, inputToken),
      logout: logout(loggedIn, loggedInUser, loggedInUserToken, inputEmail, inputPassword, inputToken),
    };
};