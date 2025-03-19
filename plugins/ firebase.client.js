import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

export default defineNuxtPlugin({
  name: "firebase-client",
  parallel: true,
  async setup(nuxtApp) {
    const db = getFirestore(nuxtApp.$firebaseApp);
    const auth = getAuth(nuxtApp.$firebaseApp);
    const modelsRef = collection(db, "users");
    return {
      provide: {
        db,
        modelsRef,
        auth,
      },
    };
  },
});
