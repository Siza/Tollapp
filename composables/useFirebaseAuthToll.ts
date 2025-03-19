import { createUserWithEmailAndPassword, User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function () {
  const { $db, $auth } = useNuxtApp();

  const user = useState<User | null>("fb_user", () => null);

  const registerUser = async (
    email: string,
    password: string,
    displayName: string
  ): Promise<boolean> => {
    try {
      const userCreds = await createUserWithEmailAndPassword(
        $auth,
        email,
        password
      );
      if (userCreds) {
        //console.log(userCreds);
        //userCreds.user.name = displayName;
        user.value = userCreds.user;
        const docRef = await setDoc(doc($db, "users", userCreds.user.uid), {
          lastname: displayName,
          email: userCreds.user.email,
          createdAt: Date.now(),
        });
        navigateTo("/settings");
        return true;
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        // handle error
      }
      return false;
    }
    return false;
  };

  return {
    user,
    registerUser,
  };
}
