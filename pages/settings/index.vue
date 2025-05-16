<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import type { FormData, FormErrors } from "~/shared/utils/validators";
import { formSchema } from "~/shared/utils/validators";
import { z } from "zod";

definePageMeta({
  layout: "member",
});
const fileRef = ref<HTMLInputElement>();

const { $db, $auth } = useNuxtApp();

const user = useCurrentUser();
type Schema = z.output<typeof formSchema>;
const state = reactive<Partial<Schema>>({
  lastname: "",
  firstname: "",
  email: "",
  username: "",
  subject: "",
  company: "",
  website: "",
  address: "",
  city: "",
  state: "",
  country: "",
  bio: "",
  phone: undefined,
  avatar: undefined,
});

if (user.value) {
  const docRef = doc($db, "users", user.value.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    state.firstname = docSnap.data().firstname;
    state.lastname = docSnap.data().lastname;
    state.email = docSnap.data().email;
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

const toast = useToast();

async function onFileChange(e: Event) {
  const input = e.target as HTMLInputElement;

  if (!input.files?.length) {
    return;
  }

  state.avatar = URL.createObjectURL(input.files[0]);
  console.log("state.avatar", state.avatar);
  const file = input.files[0];
  const formData = new FormData();
  formData.append("file", file);
  if (user.value) {
    formData.append("userId", user.value.uid);
  } else {
    console.error("User is not logged in.");
    return;
  }
  try {
    const response = await $fetch("/api/uploads", {
      method: "POST",
      body: formData,
    });

    if (!response || !response.ok) {
      throw new Error("Failed to upload file");
    }
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}

function onFileClick() {
  fileRef.value?.click();
}

// async function onSubmit(event: FormSubmitEvent<any>) {
//   // Do something with data
//   console.log(event.data);

//   toast.add({ title: "Profile updated", icon: "i-heroicons-check-circle" });
// }

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event);
}
// await updateDoc(doc($db, "users", user.value.uid), {
//   firstname: state.firstname,
//   lastname: state.lastname,
//   username: state.username,
//   bio: state.bio,
//   avatar: state.avatar,
// });
toast.add({ title: "Profile updated", icon: "i-heroicons-check-circle" });

// const user = useState("userName");
// console.log("user:", user);
</script>

<template>
  <UForm id="settings" :schema="formSchema" :state="state" @submit="onSubmit">
    <UPageCard
      title="Profile"
      description="This information will be displayed publicly so be careful what you share."
      variant="naked"
      orientation="horizontal"
      class="mb-4"
    >
      <UButton
        form="settings"
        label="Save changes"
        color="neutral"
        type="submit"
        class="w-fit lg:ms-auto"
      />
    </UPageCard>

    <UPageCard variant="subtle">
      <SettingsUsersFormInput
        id="lastname"
        inputType="text"
        label="Lastname"
        icon="i-heroicons-user"
        name="lastname"
        required
        v-model="state.lastname"
        description="Your unique username for logging in and your profile URL."
        placeholder="Enter your lastname"
      />

      <SettingsUsersFormInput
        id="firstname"
        inputType="text"
        label="Firstname"
        icon="i-heroicons-user"
        name="firstname"
        required
        v-model="state.firstname"
        description="Your unique username for logging in and your profile URL."
        placeholder="Enter your firstname"
      />

      <SettingsUsersFormInput
        id="email"
        inputType="email"
        label="Email"
        icon="i-heroicons-envelope"
        name="email"
        required
        v-model="state.email"
        description="Used to sign in, for email receipts and product updates."
        placeholder="Enter your email"
      />

      <SettingsUsersFormInput
        id="username"
        inputType="Username"
        label="username"
        icon="i-heroicons-envelope"
        name="username"
        required
        v-model="state.username"
        description="Used to sign in, for email receipts and product updates."
        placeholder="Enter your username"
      />
      <UFormField
        name="avatar"
        label="Avatar"
        description="JPG, GIF or PNG. 1MB Max."
        class="flex max-sm:flex-col justify-between sm:items-center gap-4"
      >
        <div class="flex flex-wrap items-center gap-3">
          <UAvatar :src="state.avatar" :alt="state.name" size="lg" />
          <UButton label="Choose" color="neutral" @click="onFileClick" />
          <input
            ref="fileRef"
            type="file"
            class="hidden"
            accept=".jpg, .jpeg, .png, .gif"
            @change="onFileChange"
          />
        </div>
      </UFormField>
      <USeparator />
      <SettingsUsersFormTextarea
        id="bio"
        label="Bio"
        name="bio"
        :required="false"
        v-model="state.bio"
        description="Brief description for your profile. URLs are hyperlinked."
        placeholder="Enter your bio"
      />
    </UPageCard>
  </UForm>
</template>
