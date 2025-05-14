<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

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
    id: "select",
    header: ({ table }) =>
      h(UCheckbox, {
        modelValue: table.getIsSomePageRowsSelected()
          ? "indeterminate"
          : table.getIsAllPageRowsSelected(),
        "onUpdate:modelValue": (value: boolean | "indeterminate") =>
          table.toggleAllPageRowsSelected(!!value),
        ariaLabel: "Select all",
      }),
    cell: ({ row }) =>
      h(UCheckbox, {
        modelValue: row.getIsSelected(),
        "onUpdate:modelValue": (value: boolean | "indeterminate") =>
          row.toggleSelected(!!value),
        ariaLabel: "Select row",
      }),
  },
  {
    accessorKey: "id",
    header: "#",
  },
  {
    accessorKey: "depart",
    header: "Départ",
  },
  {
    accessorKey: "arrivee",
    header: "Arrivée",
  },
  {
    accessorKey: "date",
    header: "Date prévue",
  },
  {
    accessorKey: "status",
    header: "Statut",
  },
  {
    accessorKey: "select",
  },
];
const rides = ref([]);
const { $db, $auth } = useNuxtApp();
const user = useCurrentUser();
const q = query(
  collection($db, "relationships"),
  where("convoyeurID", "==", user.value?.uid)
);
console.log("user", user.value?.uid);
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

let index = 0;
interface State {
  Id: number;
  Depart: string;
  Arrivee: string;
  Cout: string;
  actions: string;
}
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   const state = {
//     id: "",
//     idAnnonceur: "",
//     depart: "",
//     arrivee: "",
//     date: "",
//     cout: "",
//     status: "En attente",
//   };
//   console.log(doc.id, " => ", doc.data()?.departure?.properties?.city);
//   console.log(state);
//   state.id = index++;
//   state.annonce = doc.id;
//   state.idAnnonceur = doc.data()?.userId;
//   state.depart = doc.data()?.departure?.properties?.city;
//   state.arrivee = doc.data()?.arrival?.properties?.city;
//   const mydate = doc.data()?.dateExpected;
//   console.log(mydate);
//   state.date = doc.data()?.dateExpected;
//   state.cout = doc.data()?.tarif;
//   rides.value.push(state);
// });
// console.log(rides.value[0].date.toDate().toLocaleDateString());
const selected = ref([]);
const toast = useToast();

// function select(row) {
//   const index = selected.value.findIndex(function (item) {
//     console.log(item.id, row.id);
//     return item.id === row.id;
//   });
//   //console.log(index);
//   if (index === -1) {
//     selected.value.push(row);
//   } else {
//     selected.value.splice(index, 1);
//   }
// }
</script>
<template>toto</template>
<style scoped></style>
