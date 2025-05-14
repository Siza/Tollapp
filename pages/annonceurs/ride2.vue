<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
//import { format } from "date-fns";
import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
} from "@internationalized/date";

definePageMeta({
  layout: "member",
});

const df = new DateFormatter("en-US", {
  dateStyle: "medium",
});

const modelValue = shallowRef(new CalendarDate(2022, 1, 10));
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
const energies = ["Essence", "Diesel", "Electrique", "Hybride"];
const loading = ref(false);
const selected = ref(true);
const options = ref("trajet");

function validate(state: any): FormError[] {
  const errors = [];
  if (!state.marque)
    errors.push({ path: "name", message: "Please enter your marque." });
  if (!state.modele)
    errors.push({ path: "email", message: "Please enter your modele." });
  return errors;
}
const data = await useFetch("/api/examples");
console.log(data);

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

const items = ref([]);
async function search(q: string) {
  loading.value = true;
  console.log(q);
  if (q.length > 3) {
    const hereAutocompleteApi =
      "https://autocomplete.search.hereapi.com/v1/autocomplete";
    const dataGouvApi = "https://api-adresse.data.gouv.fr/search/";
    //const users: any[] = await $fetch(hereAutocompleteApi, { params: { q,in:"countryCode:FRA" ,apiKey:"5ZeZbtm4ziUjQd24e1cNjisx8jrNqm0ODxMYT5wJkZg" } })
    const users: any[] = await $fetch(dataGouvApi, { params: { q } });
    loading.value = false;
    console.log(users);
    //return users.items
    items.value = users.features.map((item: any) => {
      return {
        id: item.properties.id,
        label: item.properties.label,
        city: item.properties.city,
        postalcode: item.properties.postcode,
      };
    });
    console.log(items.value);
    return users.features;
  } else {
    return [];
  }
}
</script>
<template>
  <UForm id="ride" :state="state" @submit="onSubmit">
    <UPageCard
      title="Profile"
      description="This information will be displayed publicly so be careful what you share."
      variant="naked"
      orientation="horizontal"
      class="mb-4"
    >
      <UButton
        form="ride"
        label="Save changes"
        color="neutral"
        type="submit"
        class="w-fit lg:ms-auto"
      />
    </UPageCard>
    <UFormField
      name="marque"
      label="Marque"
      required
      class="grid grid-cols-2 gap-2 items-center"
    >
      <UInput
        v-model="state.marque"
        autocomplete="off"
        icon="i-heroicons-user"
        size="md"
      />
    </UFormField>
    <UFormField
      name="modele"
      label="Modele"
      required
      class="grid grid-cols-2 gap-2 items-center"
    >
      <UInput
        v-model="state.modele"
        autocomplete="off"
        icon="i-heroicons-user"
        size="md"
      />
    </UFormField>
    <UFormField
      name="energie"
      label="Energie"
      required
      class="grid grid-cols-2 gap-2 items-center"
    >
      <UInputMenu v-model="state.energie" :items="energies" />
    </UFormField>
    <UDashboardSection
      title="Formulaire du trajet"
      description="This information will be displayed publicly so be careful what you share."
    >
    </UDashboardSection>
    <UFormField
      name="departure"
      label="Departure"
      required
      class="grid grid-cols-2 gap-2 items-center"
      :ui="{ container: '' }"
    >
      <!-- <UInput
          v-model="state.departure"
          autocomplete="off"
          icon="i-heroicons-user"
          size="md"
        /> -->
      <UInputMenu
        v-model="state.departure"
        @update:searchTerm="search"
        :items="items"
        :loading="loading"
        placeholder="Search for a user..."
        option-attribute="properties.label"
        trailing
        by="id"
      />
    </UFormField>
    <UFormField
      name="arrival"
      label="Arrival"
      required
      class="grid grid-cols-2 gap-2 items-center"
      :ui="{ container: '' }"
    >
      <!-- <UInput
          v-model="state.arrival"
          autocomplete="off"
          icon="i-heroicons-user"
          size="md"
        /> -->
      <UInputMenu
        v-model="state.arrival"
        @update:searchTerm="search"
        :items="items"
        :loading="loading"
        placeholder="Search for a user..."
        option-attribute="properties.label"
        trailing
        by="id"
      />
    </UFormField>

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
            <li>Maps: <a :href="route.summary.url">voir sur google map</a></li>
          </ul>
        </div>
      </div>
    </div>

    <UFormField
      name="price"
      label="Tarif"
      required
      class="grid grid-cols-2 gap-2 items-center"
      :ui="{ container: '' }"
    >
      <UInput v-model="state.price" size="md"></UInput>
    </UFormField>
    <UFormField
      name="date"
      label="Date souhaitée"
      required
      class="grid grid-cols-2 gap-2 items-center"
      :ui="{ container: '' }"
    >
      <UPopover>
        <UButton color="neutral" variant="subtle" icon="i-lucide-calendar">
          {{
            modelValue
              ? df.format(modelValue.toDate(getLocalTimeZone()))
              : "Select a date"
          }}
        </UButton>

        <template #content>
          <UCalendar v-model="modelValue" class="p-2" />
        </template>
      </UPopover>
    </UFormField>
  </UForm>
</template>
<style scoped></style>
