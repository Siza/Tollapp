<template>
  <UCard class="max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur">
    <UAuthForm
      :fields="fields"
      :validate="validate"
      title="Welcome back!"
      align="top"
      icon="i-heroicons-lock-closed"
      :ui="{ base: 'text-center', footer: 'text-center' }"
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
          color="red"
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
  </UCard>
  <!-- <div id="firebaseui-auth-container"></div> -->
</template>

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

const fields = [
  {
    name: "email",
    type: "text",
    label: "Email",
    placeholder: "Enter your email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
  {
    name: "remember",
    label: "Remember me",
    type: "checkbox",
  },
];

const state = reactive({
  email: undefined,
  password: undefined,
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

async function onSubmit(data: any) {
  // Do something with event.data
  const auth = getAuth();
  signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      //useState("counter", () => user.uid);
      const route = useRoute();
      if (route.query.redirect) {
        navigateTo(route.query.redirect);
      } else {
        navigateTo("/dashboard");
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
</script>
