<script setup lang="ts">
import type { TableColumn } from "@nuxt/ui";
import {
  collection,
  doc,
  documentId,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

definePageMeta({
  layout: "member",
});

const UCheckbox = resolveComponent("UCheckbox");
const UDropdownMenu = resolveComponent("UDropdownMenu");
const UButton = resolveComponent("UButton");

const toast = useToast(); // Initialize the toast composable

type Ride = {
  id: number;
  depart: string;
  arrivee: string;
  date: Date;
  cout: string;
  convoyeurIDs: string[];
  status: string;
};
const columns: TableColumn<Ride>[] = [
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
    id: "idBase",
  },
  {
    id: "expand",
    cell: ({ row }) =>
      h(UButton, {
        color: "neutral",
        variant: "ghost",
        icon: "i-lucide-chevron-down",
        square: true,
        "aria-label": "Expand",
        ui: {
          leadingIcon: [
            "transition-transform",
            row.getIsExpanded() ? "duration-200 rotate-180" : "",
          ],
        },
        onClick: () => {
          console.log("row", row.getIsExpanded());
          getConvoyeurIDs(row);
          if (row.getIsExpanded()) {
            toast.add({
              title: "Ride expanded",
              icon: "i-heroicons-check-circle",
            });
          } else {
            toast.add({
              title: "Ride collapsed",
              icon: "i-heroicons-x-circle",
            });
          }
          row.toggleExpanded();
        },
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
    cell: ({ row }) => {
      //return new Date(row.getValue("date")).toLocaleString("fr-FR");
      return new Intl.DateTimeFormat().format(row.getValue("date"));
    },
  },
  {
    accessorKey: "status",
    header: "Statut",
  },

  {
    accessorKey: "convoyeurIDs",
    header: "Nombre de convoyeurs",
    cell: ({ row }) => {
      const convoyeurIDs = row.getValue("convoyeurIDs");
      return convoyeurIDs.length;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return h(
        "div",
        { class: "text-right" },
        h(
          UDropdownMenu,
          {
            content: {
              align: "end",
            },
            items: getRowItems(row),
            "aria-label": "Actions dropdown",
          },
          () =>
            h(UButton, {
              icon: "i-lucide-ellipsis-vertical",
              color: "neutral",
              variant: "ghost",
              class: "ml-auto",
              "aria-label": "Actions dropdown",
            })
        )
      );
    },
  },
];
function navigate(p) {
  navigateTo({ path: "/annonceurs/ride/" + p });
}

async function getConvoyeurIDs(row) {
  const convoyeurIDs = row.getValue("convoyeurIDs");
  console.log("convoyeurIDs", convoyeurIDs);

  const convoyeurIDsRef = collection($db, "users");
  const q = query(convoyeurIDsRef, where(documentId(), "in", convoyeurIDs));
  const querySnapshot = await getDocs(q);
  let index = 0;
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
  return convoyeurIDs.length;
}

function getRowItems(row) {
  return [
    {
      type: "label",
      label: "Actions",
    },
    {
      label: "Edit Ride",
      onSelect() {
        navigate(row.original.idBase);
      },
    },
  ];
}

const columnVisibility = ref({
  idBase: false,
});

const rides = ref([]);
const { $db, $auth } = useNuxtApp();
const user = useCurrentUser();
console.log(user.value);
const citiesRef = collection($db, "rides");
const q = query(citiesRef, where("userId", "==", user.value.uid));
const querySnapshot = await getDocs(q);
let index = 0;

querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.data());
  const state = {
    id: "",
    idBase: "",
    depart: "",
    arrivee: "",
    date: "",
    cout: "",
    convoyeurIDs: [],
    status: "En cours",
  };
  console.log(doc.id, " => ", doc.data().convoyeurIDs.length);
  console.log(state);
  state.id = ++index;
  state.idBase = doc.id;
  state.depart = doc.data()?.departure?.city;
  state.arrivee = doc.data()?.arrival?.city;
  const mydate = doc.data()?.dateExpected;
  state.date = mydate.toDate();
  state.cout = doc.data()?.tarif;
  state.convoyeurIDs = doc.data()?.convoyeurIDs || [];
  state.status = doc.data()?.status || "En attente";
  console.log("convoyeurIDs", state.convoyeurIDs);
  rides.value.push(state);
});
const expanded = ref({ 1: true });
// check if a ride is in status Pending in the document relationships
</script>
<template>
  <UTable
    v-model:expanded="expanded"
    :columns="columns"
    :data="rides"
    :column-visibility="columnVisibility"
    :ui="{ tr: 'data-[expanded=true]:bg-elevated/50' }"
    class="flex-1"
  >
    <template #expanded="{ row }">
      <pre>{{ row.original }}</pre>
    </template>
  </UTable>
</template>
<style scoped></style>
