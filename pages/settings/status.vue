<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
import { doc, getDoc, updateDoc } from "firebase/firestore";

definePageMeta({
  layout: "member",
});
const fileRef = ref<HTMLInputElement>();
// const isDeleteAccountModalOpen = ref(false);
const { $db, $auth } = useNuxtApp();

const user = useCurrentUser();

const state = reactive({
  permis: undefined,
});
const uid = ref("");
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

function validate(state: any): FormError[] {
  const errors = [];
  if (!state.lastname)
    errors.push({ path: "name", message: "Please enter your name." });
  if (!state.email)
    errors.push({ path: "email", message: "Please enter your email." });
  if (
    (state.password_current && !state.password_new) ||
    (!state.password_current && state.password_new)
  )
    errors.push({
      path: "password",
      message: "Please enter a valid password.",
    });
  return errors;
}

function onFileChange(e: Event) {
  const input = e.target as HTMLInputElement;

  if (!input.files?.length) {
    return;
  }

  state.avatar = URL.createObjectURL(input.files[0]);
}

function onFileClick() {
  fileRef.value?.click();
}

// async function onSubmit(event: FormSubmitEvent<any>) {
//   // Do something with data
//   console.log(event.data);

//   toast.add({ title: "Profile updated", icon: "i-heroicons-check-circle" });
// }

async function onSubmit(event: any) {
  // Do something with event.data
  const docRef = await updateDoc(doc($db, "users", user.value.uid), {
    firstname: event.data.firstname,
    lastname: event.data.lastname,
    email: event.data.email,
    modifiedAt: Date.now(),
  });
  toast.add({ title: "Profile updated", icon: "i-heroicons-check-circle" });
}

// const user = useState("userName");
// console.log("user:", user);
</script>

<template>
  <UForm
    :state="state"
    :validate="validate"
    :validate-on="['submit']"
    @submit="onSubmit"
  >
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
      <UFormField
        name="lastname"
        label="Lastname"
        required
        class="grid grid-cols-2 gap-2 items-center"
      >
        <UInput
          v-model="state.lastname"
          autocomplete="off"
          icon="i-heroicons-user"
        />
      </UFormField>

      <UFormField
        name="firstname"
        label="Firstname"
        required
        class="grid grid-cols-2 gap-2 items-center"
      >
        <UInput
          v-model="state.firstname"
          autocomplete="off"
          icon="i-heroicons-user"
        />
      </UFormField>

      <UFormField
        name="email"
        label="Email"
        description="Used to sign in, for email receipts and product updates."
        required
        class="grid grid-cols-2 gap-2"
        :ui="{ container: '' }"
      >
        <UInput
          v-model="state.email"
          type="email"
          autocomplete="off"
          icon="i-heroicons-envelope"
          size="md"
          class="toto"
          disabled
        />
      </UFormField>

      <UFormField
        name="username"
        label="Username"
        description="Your unique username for logging in and your profile URL."
        required
        class="grid grid-cols-2 gap-2"
        :ui="{ container: '' }"
      >
        <UInput
          v-model="state.username"
          type="username"
          autocomplete="off"
          size="md"
          input-class="ps-[77px]"
        >
          <template #leading>
            <span class="text-gray-500 dark:text-gray-400 text-sm"
              >nuxt.com/</span
            >
          </template>
        </UInput>
      </UFormField>
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
      <UFormField
        name="bio"
        label="Bio"
        description="Brief description for your profile. URLs are hyperlinked."
        class="flex max-sm:flex-col justify-between items-start gap-4"
        :ui="{ container: 'w-full' }"
      >
        <UTextarea v-model="state.bio" :rows="5" autoresize class="w-full" />
      </UFormField>
    </UPageCard>
  </UForm>
</template>
