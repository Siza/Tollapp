<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

definePageMeta({
  layout: "member",
});

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "depart",
    label: "Départ",
  },
  {
    key: "arrivee",
    label: "Arrivée",
  },
  {
    key: "date",
    label: "Date prévue",
  },
  {
    key: "status",
    label: "Status",
  },
];
const rides = ref([]);
const { $db, $auth } = useNuxtApp();
const user = useCurrentUser();
const citiesRef = collection($db, "rides");
const q = query(citiesRef, where("userId", "==", user.value.uid));
const querySnapshot = await getDocs(q);
let index = 0;
interface State {
  Id: number;
  Depart: string;
  Arrivee: string;
  Cout: string;
  actions: string;
}

querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.data());
  const state = {
    id: "",
    depart: "",
    arrivee: "",
    date: "",
    cout: "",
    status: "En cours",
  };
  console.log(doc.id, " => ", doc.data()?.departure?.properties?.city);
  console.log(state);
  state.id = ++index;
  state.depart = doc.data()?.departure?.properties?.city;
  state.arrivee = doc.data()?.arrival?.properties?.city;
  const mydate = doc.data()?.dateExpected;
  console.log(mydate);
  state.date = doc.data()?.dateExpected;
  state.cout = doc.data()?.tarif;
  rides.value.push(state);
});
console.log(rides.value[0]?.date.toDate().toLocaleDateString());
</script>
<template>
  <UDashboardPanelContent>
    <UDashboardCard>
      <UTable :columns="columns" :rows="rides">
        <template #date-data="{ row }">
          {{ row.date?.toDate().toLocaleDateString() }}
        </template>
        <template #empty-state>
          <div class="flex flex-col items-center justify-center py-6 gap-3">
            <span class="italic text-sm">Aucune annonce!</span>
            <UButton
              icon="i-heroicons-pencil-square"
              label="Ajouter une annonce"
              to="annonceurs/ride"
            />
          </div>
        </template>
      </UTable>
    </UDashboardCard>
  </UDashboardPanelContent>
</template>
<style scoped></style>
