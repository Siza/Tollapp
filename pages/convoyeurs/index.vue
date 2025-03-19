<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
import { ModalAvertissement } from "#components";

import {
  addDoc,
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
    label: "#",
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
    label: "Statut",
  },
  {
    key: "select",
  },
];
const rides = ref([]);
const { $db, $auth } = useNuxtApp();
const user = useCurrentUser();
const citiesRef = collection($db, "rides");

const querySnapshot = await getDocs(citiesRef);
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
  const state = {
    id: "",
    idAnnonceur: "",
    depart: "",
    arrivee: "",
    date: "",
    cout: "",
    status: "En attente",
  };
  console.log(doc.id, " => ", doc.data()?.departure?.properties?.city);
  console.log(state);
  state.id = index++;
  state.annonce = doc.id;
  state.idAnnonceur = doc.data()?.userId;
  state.depart = doc.data()?.departure?.properties?.city;
  state.arrivee = doc.data()?.arrival?.properties?.city;
  const mydate = doc.data()?.dateExpected;
  console.log(mydate);
  state.date = doc.data()?.dateExpected;
  state.cout = doc.data()?.tarif;
  rides.value.push(state);
});
console.log(rides.value[0].date.toDate().toLocaleDateString());
const selected = ref([]);
const toast = useToast();

function select(row) {
  const index = selected.value.findIndex(function (item) {
    console.log(item.id, row.id);
    return item.id === row.id;
  });
  //console.log(index);
  if (index === -1) {
    console.log(selected.value);
    selected.value.push(row);
    console.log(selected.value);
  } else {
    console.log(index);
    selected.value.splice(index, 1);
  }
  console.log(selected.value);
}
async function submit(e) {
  console.log(selected.value);
  selected.value.map(async (relation) => {
    const docRef = await setDoc(doc($db, "relationships", relation.annonce), {
      createdAt: Date.now(),
      annonce: relation.annonce,
      annonceurID: relation.idAnnonceur,
      convoyeurID: useCurrentUser().value.uid,
    });
  });

  toast.add({ title: "Profile updated", icon: "i-heroicons-check-circle" });
}

//const toast = useToast()
const modal = useModal();
const count = ref(0);

function openModal() {
  count.value += 1;

  modal.open(ModalAvertissement, {
    count: count.value,
    onSuccess() {
      toast.add({
        title: "Success !",
        id: "modal-success",
      });
    },
  });
}
function suc() {
  console.log("emit");
}
</script>
<template>
  <UDashboardPanelContent>
    <UDashboardCard>
      <UTable :columns="columns" :rows="rides" v-model="selected">
        <template #date-data="{ row }">
          {{ row.date?.toDate().toLocaleDateString() }}
        </template>
        <template #empty-state>
          <div class="flex flex-col items-center justify-center py-6 gap-3">
            <span class="italic text-sm">No one here!</span>
            <UButton label="Add rides" />
          </div>
        </template>
      </UTable>
      <UButton @some-event="suc">Soumettre</UButton>
      <ModalAvertissement />
    </UDashboardCard>
  </UDashboardPanelContent>
</template>
<style scoped></style>
