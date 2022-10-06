import type { Ref } from "vue";
export const useAuth = () => {
  const cookie = useCookie<string|null>("access_token");
  // サンプルではcookieの存在有無だけ
  // TODO: validate
  const initialValue = cookie.value ? true : false;
  const loggedIn = useState("loggedIn", () => initialValue);
  const login = (loggedIn: Ref<boolean>) => async () => {
    const data = await $fetch("/api/sign/login");
    cookie.value = data.accessToken;
    loggedIn.value = true;
    return true;
  };
  const logout = (loggedIn: Ref<boolean>) => async () => {
    loggedIn.value = false;
    cookie.value = null;
  };
  const getToken = () => {
    return cookie.value;
  };
  return {
      loggedIn,
      getToken,
      login: login(loggedIn),
      logout: logout(loggedIn),
    };
};