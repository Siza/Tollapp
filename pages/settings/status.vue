<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

definePageMeta({
  layout: "member",
});

const { $db, $auth } = useNuxtApp();

const user = useCurrentUser();

const state = ref({
  permis: { filename: undefined, createddAt: undefined, status: "0" },
  rcpro: { filename: undefined, createddAt: undefined, status: "0" },
  assurance: { filename: undefined, createddAt: undefined, status: "0" },
  kbis: { filename: undefined, createddAt: undefined, status: "0" },
});
const uid = ref("");
if (user.value) {
  const docRef = doc($db, "papiers", user.value.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    state.value = docSnap.data().state;
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

const toast = useToast();
const formData = new FormData();

async function onFileChange(e: Event, name: string) {
  const input = e.target as HTMLInputElement;

  if (!input.files?.length) {
    return;
  }
  const file = input.files[0];

  if (formData.has(name)) {
    formData.set(name, file);
  } else {
    formData.append(name, file);
  }

  state[name].filename = file.name;
  state[name].createddAt = new Date();
  state[name].status = "1";
  // Update the state to reflect the file change
  // This will trigger reactivity in the template
  console.log(`File changed for ${name}:`, state[name]);
}

async function onSubmit(event: any) {
  if (user.value) {
    if (formData.has("userId")) {
      formData.set("userId", user.value.uid);
    } else {
      formData.append("userId", user.value.uid);
    }
  } else {
    console.error("User is not logged in.");
    return;
  }
  const response = await $fetch("/api/uploads", {
    method: "POST",
    body: formData,
  });
  // Do something with event.data
  const docRef = await updateDoc(doc($db, "papiers", user.value.uid), {
    state,
  });
  toast.add({ title: "Profile updated", icon: "i-heroicons-check-circle" });
}
</script>

<template>
  <UForm id="settings" :state="state" @submit="onSubmit">
    <UPageCard
      title="Status"
      description="Verification des papiers de convoyeur. Ils ne seront pas conservés. Il ne serviront qu'à vérifier votre statut de convoyeur."
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
      <SettingsUsersFormUpload
        :state="{
          label: 'Permis de conduire',
          badge: state.permis.status,
          name: 'permis',
          labelButton: 'Choose',
          description: 'JPG, GIF or PNG. 1MB Max.',
          filename: state.permis.filename,
        }"
        @onFileChange="onFileChange($event, 'permis')"
      />
      <!-- <UFormField
        name="permis"
        :ui="{
          root: 'flex max-sm:flex-col justify-between sm:items-center gap-4',
          wrapper: '',
          container: 'mt-1 relative flex',
        }"
      >
        <template #label>
          <div class="flex items-center gap-2">
            <span class="text-lg font-semibold">Permis de conduire</span>
            <UBadge class="font-bold rounded-full">Badge</UBadge>
          </div>
        </template>
        <template #description>
          <span class="text-sm text-gray-600">JPG, GIF or PNG. 1MB Max.</span>
        </template>
        <div class="flex flex-wrap items-center gap-3">
          <span v-if="state.permis" class="text-sm text-gray-600">
            {{ state.permis }}
          </span>
          <UButton
            label="Choose"
            color="neutral"
            @click="onFileClick('permis')"
          />
          <input
            ref="fileRefPermis"
            type="file"
            class="hidden"
            accept=".jpg, .jpeg, .png, .gif"
            @change="onFileChange($event, 'permis')"
          />
        </div>
      </UFormField> -->
      <USeparator />
      <SettingsUsersFormUpload
        :state="{
          label: 'RC pro',
          badge: state.permis.status,
          name: 'rcpro',
          labelButton: 'Choose',
          description: 'JPG, GIF or PNG. 1MB Max.',
          filename: state.rcpro.filename,
        }"
        @onFileChange="onFileChange($event, 'rcpro')"
      />
      <USeparator />
      <SettingsUsersFormUpload
        :state="{
          label: 'Assurance convoyage',
          badge: state.permis.status,
          name: 'assurance',
          labelButton: 'Choose',
          description: 'JPG, GIF or PNG. 1MB Max.',
          filename: state.assurance.filename,
        }"
        @onFileChange="onFileChange($event, 'assurance')"
      />
      <USeparator />
      <SettingsUsersFormUpload
        :state="{
          label: 'Kbis',
          badge: state.permis.status,
          name: 'kbis',
          labelButton: 'Choose',
          description: 'JPG, GIF or PNG. 1MB Max.',
          filename: state.kbis.filename,
        }"
        @onFileChange="onFileChange($event, 'kbis')"
      />
    </UPageCard>
  </UForm>
</template>
