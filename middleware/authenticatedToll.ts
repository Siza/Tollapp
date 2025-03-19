import { getCurrentUser } from "vuefire";

export default defineNuxtRouteMiddleware(async (to, from) => {
  // In a real app you would probably not redirect every route to `/`
  // however it is important to check `to.path` before redirecting or you
  // might get an infinite redirect loop
  // if (to.path !== "/") {
  //   return navigateTo("/");
  // }

  const user = await getCurrentUser();
  const currentUser = useCurrentUser();
  console.log("user::", await getCurrentUser());
  const connected = useState("counted");
  console.log(connected);
  if (!user) {
    return navigateTo({
      path: "/login",
      query: {
        redirect: to.fullPath,
      },
    });
  }
});
