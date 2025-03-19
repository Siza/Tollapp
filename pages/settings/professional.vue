<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
import { doc, getDoc, setDoc } from "firebase/firestore";

definePageMeta({
  layout: "member",
});

// const isDeleteAccountModalOpen = ref(false);
const { $db, $auth } = useNuxtApp();

const user = useCurrentUser();

const state = reactive({
  carLicence: "",
  companyLicence: "",
  companyName: "",
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

function validate(state: any): FormError[] {
  const errors = [];
  if (!state.carLicence)
    errors.push({ path: "name", message: "Please enter your carLicence." });
  if (!state.companyLicence)
    errors.push({
      path: "email",
      message: "Please enter your companyLicence.",
    });
  if (!state.companyName)
    errors.push({ path: "name", message: "Please enter your companyName." });
  return errors;
}

async function onSubmit(event: any) {
  // Do something with event.data
  const docRef = await setDoc(doc($db, "users", user.value.uid), {
    firstname: event.data.firstname,
    lastname: event.data.lastname,
    // email: event.data.email,
  });
  toast.add({ title: "Profile updated", icon: "i-heroicons-check-circle" });
}
</script>

<template>
  <UDashboardPanelContent class="pb-24">
    <UForm
      :state="state"
      :validate="validate"
      :validate-on="['submit']"
      @submit="onSubmit"
    >
      <UDashboardSection
        title="Profile"
        description="This information will be displayed publicly so be careful what you share."
      >
        <template #links>
          <UButton type="submit" label="Save changes" color="black" />
        </template>

        <UFormGroup
          name="companyName"
          label="companyName"
          required
          class="grid grid-cols-2 gap-2 items-center"
          :ui="{ container: '' }"
        >
          <UInput
            v-model="state.companyName"
            autocomplete="off"
            icon="i-heroicons-user"
            size="md"
          />
        </UFormGroup>

        <UFormGroup
          name="companyLicence"
          label="companyLicence"
          required
          class="grid grid-cols-2 gap-2 items-center"
          :ui="{ container: '' }"
        >
          <UInput
            v-model="state.companyLicence"
            autocomplete="off"
            icon="i-heroicons-user"
            size="md"
          />
        </UFormGroup>

        <UFormGroup
          name="carLicence"
          label="carLicence"
          required
          class="grid grid-cols-2 gap-2"
          :ui="{ container: '' }"
        >
          <UInput
            v-model="state.carLicence"
            autocomplete="off"
            icon="i-heroicons-envelope"
            size="md"
          />
        </UFormGroup>
      </UDashboardSection>
    </UForm>
  </UDashboardPanelContent>
</template>
