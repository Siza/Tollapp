<script setup lang="ts">
import { createUserWithEmailAndPassword } from "firebase/auth";

definePageMeta({
  layout: "auth",
});

useSeoMeta({
  title: "Sign up",
});

const { registerUser } = useFirebaseAuthToll();

const { $db, $auth } = useNuxtApp();
const state = reactive({
  email: "",
  password: "",
  name: "",
});

async function handleRegistration(data: any) {
  console.log(state, data);

  await registerUser(data.email, data.password, data.name);
}

const fields = [
  {
    name: "name",
    type: "text",
    label: "Name",
    placeholder: "Enter your name",
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
];

const validate = (state: any) => {
  const errors = [];
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
    color: "gray" as const,
    click: () => {
      console.log("Redirect to GitHub");
    },
  },
];

// async function registerUser() {
//   try {
//     const { user } = await createUserWithEmailAndPassword(
//       $auth,
//       state.email,
//       state.password
//     );
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       // handle error
//     }
//   }
// }
</script>

<!-- eslint-disable vue/multiline-html-element-content-newline -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<template>
  <UCard class="max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur">
    <UAuthForm
      :fields="fields"
      :validate="validate"
      :providers="providers"
      align="top"
      title="Create an account"
      :ui="{ base: 'text-center', footer: 'text-center' }"
      :submit-button="{ label: 'Create account' }"
      @submit="handleRegistration"
    >
      <template #description>
        Already have an account?
        <NuxtLink to="/login" class="text-primary font-medium">Login</NuxtLink>.
      </template>

      <template #footer>
        By signing up, you agree to our
        <NuxtLink to="/" class="text-primary font-medium"
          >Terms of Service</NuxtLink
        >.
      </template>
    </UAuthForm>
  </UCard>
</template>
