export const stateRoute = ()=> {
  const router = useRouter();
  console.log('orutr',router.currentRoute)
  const currentRout = useState("currentRout", () => 'current');
  return{
    currentRout
  }
}