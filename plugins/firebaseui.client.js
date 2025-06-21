import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

import * as firebaseui from "firebaseui";
//import "firebaseui/dist/firebaseui.css";

export default defineNuxtPlugin((nuxtApp) => {
  const tui = new firebaseui.auth.AuthUI(getAuth(nuxtApp.$firebaseApp));
  const db = getFirestore(nuxtApp.$firebaseApp);
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      const name = user.displayName;
      console.log(name);
      const counter = useState("counter", () => uid);
      console.log(counter);
    } else {
      // User is signed out
      console.log("not auth");
    }
  });
  return {
    provide: {
      tui,
    },
  };
});
