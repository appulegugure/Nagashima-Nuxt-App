import type { Ref } from "vue";
export const useAuth = () => {
  const cookie = useCookie<string|null>("access_token",{
    maxAge:3600,
    // httpOnly:true,
    secure:true
  });

  const initialValue = cookie.value ? true : false;
  const initialLoginUser = cookie.value? cookie.value : null
  const loggedIn = useState("loggedIn", () => initialValue);
  const loggedInUser = useState<string|null>("loggedInUser", ()=> initialLoginUser )
  const inputEmail = useState<string|null>("email", () => null)
  const inputPassword = useState<string|null>("password", () => null)
  const inputToken = useState<string|null>("token", () => null)

  const login = (loggedIn: Ref<boolean>,loggedInUser: Ref<string|null>,email:Ref<string|null>, password:Ref<string|null>) => async () => {
    const data = await $fetch("/api/sign/login",{
      method: 'POST',
      body: {
        email: email.value,
        password: password.value
      }
  });
    cookie.value = data.accessToken;
    loggedIn.value = true;
    loggedInUser.value = cookie.value
    return true;
  };

  const logout = (loggedIn: Ref<boolean>, loggedInUser: Ref<string|null>, email:Ref<string|null>, password:Ref<string|null>) => async () => {
    loggedIn.value = false;
    cookie.value = null;
    loggedInUser.value = cookie.value
  };

  const getToken = () => {
    return cookie.value;
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
      cookie,
      setEmail,
      setPassword,
      setToken,
      loggedInUser,
      loggedIn,
      getToken,
      login: login(loggedIn,loggedInUser,inputEmail,inputPassword),
      logout: logout(loggedIn, loggedInUser,inputEmail,inputPassword),
    };
};