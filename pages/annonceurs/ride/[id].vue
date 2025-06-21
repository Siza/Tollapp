<script setup lang="ts">
import type { FormError, FormSubmitEvent, StringOrVNode } from "#ui/types";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
//import { format } from "date-fns";
import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
  toCalendarDateTime,
  today,
} from "@internationalized/date";

definePageMeta({
  layout: "member",
});

const df = new DateFormatter("fr-FR", {
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
  date: shallowRef(new CalendarDate(2022, 1, 10)),
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
const { data } = await useFetch("/api/hello");
const route = useRoute();

async function onSubmit(event: any) {
  // Do something with event.data
  //console.log("data:", event.data.date.toDate());
  const docRef = await setDoc(
    doc($db, "rides", route.params.id as string),
    {
      departure: state.departure,
      arrival: state.arrival,
      tarif: event.data.price,
      dateExpected: event.data.date.toDate(),
      car: {
        marque: event.data.marque,
        modele: event.data.modele,
        energie: event.data.energie,
      },
      userId: useCurrentUser().value.uid,
      modifiedAt: new Date(),
    },
    { merge: true }
  );

  toast.add({ title: "Ride updated", icon: "i-heroicons-check-circle" });
  await navigateTo({ path: "/annonceurs" });
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

const docRef = doc($db, "rides", route.params.id as string);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  state.marque = docSnap.data().car.marque;
  state.modele = docSnap.data().car.modele;
  state.energie = docSnap.data().car.energie;
  state.departure = docSnap.data().departure;
  state.arrival = docSnap.data().arrival;
  state.price = docSnap.data().tarif;
  //state.date = docSnap.data().dateExpected;
  state.date = new CalendarDate(
    docSnap.data().dateExpected.toDate().getFullYear(),
    docSnap.data().dateExpected.toDate().getMonth() + 1,
    docSnap.data().dateExpected.toDate().getDate()
  );
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}

const minDate = today(getLocalTimeZone());
</script>
<template>
  <UForm id="ride" :state="state" @submit="onSubmit">
    <UPageCard
      title="Trajet"
      description="Vos informations sur le trajet."
      variant="naked"
      orientation="horizontal"
      class="mb-4"
    >
      <UButton label="Retour" color="info" class="w-fit lg:ms-auto" />
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
            state.date
              ? df.format(state.date.toDate(getLocalTimeZone()))
              : "Select a date"
          }}
        </UButton>

        <template #content>
          <UCalendar v-model="state.date" :min-value="minDate" class="p-2" />
        </template>
      </UPopover>
    </UFormField>
  </UForm>
</template>
<style scoped></style>
