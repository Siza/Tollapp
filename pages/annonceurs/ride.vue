<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { format } from "date-fns";

definePageMeta({
  layout: "member",
});
const toast = useToast();
const { $db, $auth } = useNuxtApp();
const state = reactive({
  marque: "",
  modele: "",
  energie: "",
  departure: "",
  arrival: "",
  price: "",
  date: new Date(),
});
//const date = ref(new Date());
const energies = ["Essence", "Diesel", "Electrique"];
const loading = ref(false);
const selected = ref(true);
const options = ref("trajet");

const { data } = await useFetch("/api/example");

function validate(state: any): FormError[] {
  const errors = [];
  if (!state.marque)
    errors.push({ path: "name", message: "Please enter your marque." });
  if (!state.modele)
    errors.push({ path: "email", message: "Please enter your modele." });
  return errors;
}

async function onSubmit(event: any) {
  // Do something with event.data
  console.log("data:", event.data);
  const docRef = await addDoc(collection($db, "rides"), {
    departure: state.departure,
    arrival: state.arrival,
    tarif: event.data.price,
    dateExpected: event.data.date,
    car: {
      marque: event.data.marque,
      modele: event.data.modele,
      energie: event.data.energie,
    },
    userId: useCurrentUser().value.uid,
  });
  toast.add({ title: "Profile updated", icon: "i-heroicons-check-circle" });
}

async function search(q: string) {
  loading.value = true;

  if (q.length > 3) {
    const hereAutocompleteApi =
      "https://autocomplete.search.hereapi.com/v1/autocomplete";
    const dataGouvApi = "https://api-adresse.data.gouv.fr/search/";
    //const users: any[] = await $fetch(hereAutocompleteApi, { params: { q,in:"countryCode:FRA" ,apiKey:"5ZeZbtm4ziUjQd24e1cNjisx8jrNqm0ODxMYT5wJkZg" } })
    const users: any[] = await $fetch(dataGouvApi, { params: { q } });
    loading.value = false;
    //console.log(users.items)
    //return users.items
    return users.features;
  } else {
    return [];
  }
}
</script>
<template>
  <UDashboardPanelContent>
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
        <UDashboardSection
          title="Formulaire du trajet"
          description="This information will be displayed publicly so be careful what you share."
        >
        </UDashboardSection>
        <UFormGroup
          name="departure"
          label="Departure"
          required
          class="grid grid-cols-2 gap-2 items-center"
          :ui="{ container: '' }"
        >
          <UInput
            v-model="state.departure"
            autocomplete="off"
            icon="i-heroicons-user"
            size="md"
          />
          <UInputMenu
            v-model="state.departure"
            :search="search"
            :loading="loading"
            placeholder="Search for a user..."
            option-attribute="properties.label"
            trailing
            by="id"
          />
        </UFormGroup>
        <UFormGroup
          name="arrival"
          label="Arrival"
          required
          class="grid grid-cols-2 gap-2 items-center"
          :ui="{ container: '' }"
        >
          <UInput
            v-model="state.arrival"
            autocomplete="off"
            icon="i-heroicons-user"
            size="md"
          />
          <UInputMenu
            v-model="state.arrival"
            :search="search"
            :loading="loading"
            placeholder="Search for a user..."
            option-attribute="properties.label"
            trailing
            by="id"
          />
        </UFormGroup>

        <div v-if="status === 'pending'">Loading ...</div>
        <div v-else>
          <div>Départ: {{ data?.summary?.route[0]?.address }}</div>
          <div>Arrivé: {{ data.summary?.route[1]?.address }}</div>
          <div>Type de véhicule: {{ data?.summary?.vehicleDescription }}</div>
          <br />
          <div class="grid md:grid-cols-3 grid-cols-1 gap-4">
            <div v-for="route in data?.routes">
              <div>Nom du trajet: {{ route.summary.name }}</div>
              <ul>
                <li>Distance: {{ route.summary.distance.metric }}</li>
                <li>Durée: {{ route.summary.duration.text }}</li>
                <li>Péage: {{ route.summary.hasTolls }}</li>
                <li>Tarif péage: {{ route.costs.cash }} €</li>
                <li>Tarif carburant: {{ route.costs.fuel }} €</li>
                <li>
                  Maps: <a :href="route.summary.url">voir sur google map</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <UFormGroup
          name="price"
          label="Tarif"
          required
          class="grid grid-cols-2 gap-2 items-center"
          :ui="{ container: '' }"
        >
          <UInput v-model="state.price" size="md"></UInput>
        </UFormGroup>
        <UFormGroup
          name="date"
          label="Date souhaitée"
          required
          class="grid grid-cols-2 gap-2 items-center"
          :ui="{ container: '' }"
        >
          <UPopover :popper="{ placement: 'bottom-start' }">
            <UButton
              icon="i-heroicons-calendar-days-20-solid"
              :label="format(state.date, 'd MMM yyy, HH:mm')"
            />

            <template #panel="{ close }">
              <DatePicker
                v-model="state.date"
                is-required
                @close="close"
                is24hr
              />
            </template>
          </UPopover>
        </UFormGroup>
      </UDashboardSection>
    </UForm>
  </UDashboardPanelContent>
</template>
<style scoped></style>
