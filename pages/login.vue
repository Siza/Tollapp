<script setup lang="ts">
import { onMounted } from "vue";

import firebase from "firebase/compat/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import type { FormError } from "#ui/types";

definePageMeta({
  layout: "auth",
});

useSeoMeta({
  title: "Login",
});

const fields = [
  {
    name: "email",
    type: "text" as const,
    label: "Email",
    placeholder: "Enter your email",
    required: true,
    rules: [
      {
        rule: "email",
        message: "Email is not valid",
      },
    ],
    icon: "i-heroicons-at-symbol",
    iconPosition: "left",
    iconColor: "gray",
    iconSize: "sm",
    iconClass: "text-gray-500",
  },
  {
    name: "password",
    label: "Password",
    type: "password" as const,
    placeholder: "Enter your password",
  },
  {
    name: "remember",
    label: "Remember me",
    type: "checkbox",
  },
];

const state = reactive({
  email: "",
  password: "",
});

const validate = (state: any) => {
  const errors: FormError[] = [];
  if (!state.email)
    errors.push({ path: "email", message: "Email is required" });
  if (!state.password)
    errors.push({ path: "password", message: "Password is required" });
  return errors;
};

const providers = [
  {
    label: "Continue with GitHub",
    icon: "i-simple-icons-github",
    color: "white" as const,
    click: () => {
      console.log("Redirect to GitHub");
    },
  },
];

const nuxtApp = useNuxtApp();
const { $db, $auth } = useNuxtApp();
async function registerUser() {
  try {
    const { user } = await createUserWithEmailAndPassword(
      $auth,
      state.email,
      state.password
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      // handle error
    }
  }
}

function onSubmit2(data: any) {
  console.log("Submitted", data);
}

const { $tui } = useNuxtApp();
//console.log(context);
// onMounted(() => {
//   $tui.start("#firebaseui-auth-container", {
//     signInSuccessUrl: "/success",
//     signInFlow: "popup",
//     signInOptions: [
//       firebase.auth.EmailAuthProvider.PROVIDER_ID,
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     ],
//   });
// });

async function onSubmit(payload: any) {
  const { email, password } = payload.data;
  // Do something with event.data
  console.log("Submitted", payload.data);
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      //useState("counter", () => user.uid);
      const route = useRoute();
      if (route.query.redirect) {
        if (typeof route.query.redirect === "string") {
          navigateTo(route.query.redirect);
        } else {
          navigateTo("/dashboard");
        }
      } else {
        navigateTo("/dashboard");
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error.message);
    });
}
</script>
<template>
  <UAuthForm
    :fields="fields"
    :validate="validate"
    title="Welcome back!"
    icon="i-lucide-lock"
    @submit="onSubmit"
  >
    <template #description>
      Don't have an account?
      <NuxtLink to="/" class="text-primary font-medium">Sign up</NuxtLink>.
    </template>

    <template #password-hint>
      <NuxtLink to="/" class="text-primary font-medium"
        >Forgot password?</NuxtLink
      >
    </template>
    <template #validation>
      <UAlert
        color="error"
        icon="i-heroicons-information-circle-20-solid"
        title="Error signing in"
      />
    </template>
    <template #footer>
      By signing in, you agree to our
      <NuxtLink to="/" class="text-primary font-medium"
        >Terms of Service</NuxtLink
      >.
    </template>
  </UAuthForm>
  <!-- <div id="firebaseui-auth-container"></div> -->
</template>
