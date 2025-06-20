import { createUserWithEmailAndPassword } from "firebase/auth";
import type { User } from "firebase/auth";
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
        // Set the user information for the fist time
        // in the database
        // This is the first time the user is registered
        await setDoc(doc($db, "users", userCreds.user.uid), {
          lastname: displayName,
          email: userCreds.user.email,
          createdAt: Date.now(),
        });
        await setDoc(doc($db, "papiers", userCreds.user.uid), {
          createdAt: Date.now(),
          permis: {
            status: 0,
            filename: "",
            CreatedAt: Date.now(),
          },
          rcpro: {
            status: 0,
            filename: "",
            createdAt: Date.now(),
          },
          assurance: {
            status: 0,
            filename: "",
            createdAt: Date.now(),
          },
          kbis: {
            status: 0,
            filename: "",
            createdAt: Date.now(),
          },
        });

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
