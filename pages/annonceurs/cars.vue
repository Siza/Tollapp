<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
definePageMeta({
  layout: "member",
});
const toast = useToast();
const { $db, $auth } = useNuxtApp();
const state = reactive({
  marque: "",
  modele: "",
  energie: "",
});
const energies = ["Essence", "Diesel", "Electrique"];
function validate(state: any): FormError[] {
  const errors = [];
  if (!state.marque)
    errors.push({ path: "marque", message: "Please enter your marque." });
  if (!state.modele)
    errors.push({ path: "modele", message: "Please enter your modele." });
  return errors;
}
async function onSubmit(event: any) {
  console.log(event.data);
  const docRef = await addDoc(collection($db, "cars"), {
    marque: event.data.marque,
    modele: event.data.modele,
    energie: event.data.energie,
    userId: useCurrentUser().value.uid,
  });
  toast.add({ title: "Profile updated", icon: "i-heroicons-check-circle" });
}
</script>
<template>
  <UDashboardPanelContent>
    <UDashboardCard>
      <UForm
        :state="state"
        :validate="validate"
        :validate-on="['submit']"
        @submit="onSubmit"
      >
        <UDashboardSection
          title="Formulaire du trajet"
          description="This information will be displayed publicly so be careful what you share."
        >
          <template #links>
            <UButton type="submit" label="Save changes" color="black" />
          </template>
          <UFormGroup
            name="marque"
            label="Marque"
            required
            class="grid grid-cols-2 gap-2 items-center"
            :ui="{ container: '' }"
          >
            <UInput
              v-model="state.marque"
              autocomplete="off"
              icon="i-heroicons-user"
              size="md"
            />
          </UFormGroup>
          <UFormGroup
            name="modele"
            label="Modele"
            required
            class="grid grid-cols-2 gap-2 items-center"
            :ui="{ container: '' }"
          >
            <UInput
              v-model="state.modele"
              autocomplete="off"
              icon="i-heroicons-user"
              size="md"
            />
          </UFormGroup>
          <UFormGroup
            name="energie"
            label="Energie"
            required
            class="grid grid-cols-2 gap-2 items-center"
            :ui="{ container: '' }"
          >
            <UInputMenu v-model="state.energie" :options="energies" />
          </UFormGroup>
        </UDashboardSection>
      </UForm>
    </UDashboardCard>
  </UDashboardPanelContent>
</template>
<style scoped></style>
