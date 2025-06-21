<script setup lang="ts">
import { LazyModalContact } from "#components";
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

const UCheckbox = resolveComponent("UCheckbox");
const UDropdownMenu = resolveComponent("UDropdownMenu");
const UButton = resolveComponent("UButton");
//import { useCurrentUser } from "@/composables/useCurrentUser";
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
    accessorKey: "vehicule",
    header: "Véhicule",
  },
  {
    accessorKey: "date",
    header: "Date prévue",
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
const rides = ref([]);
let index = 0;

const { $db, $auth } = useNuxtApp();
try {
  await runTransaction(db, async (transaction) => {
    const sfDoc = await transaction.get(sfDocRef);
    if (!sfDoc.exists()) {
      throw "Document does not exist!";
    }

    const newPopulation = sfDoc.data().population + 1;
    transaction.update(sfDocRef, { population: newPopulation });
  });
  console.log("Transaction successfully committed!");
} catch (e) {
  console.log("Transaction failed: ", e);
}
const user = useCurrentUser();
const q = query(
  collection($db, "rides"),
  where("convoyeurIDs", "array-contains", user.value?.uid)
);

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  const state = {
    id: "",
    idBase: "",
    idAnnonceur: "",
    depart: "",
    arrivee: "",
    date: "",
    vehicule: "",
    convoyeurIDs: [],
  };

  state.id = String(index++);
  state.idBase = doc.id;
  state.annonce = doc.id;
  state.idAnnonceur = doc.data()?.userId;
  state.depart = doc.data()?.departure?.city;
  state.arrivee = doc.data()?.arrival?.city;
  const mydate = doc.data()?.dateExpected;
  state.date = mydate.toDate();
  state.vehicule = doc.data()?.car.marque + " " + doc.data()?.car.modele;
  rides.value.push(state);
});

const selected = ref([]);
const toast = useToast();

const count = ref(0);

const overlay = useOverlay();

const modal = overlay.create(LazyModalContact, {
  props: {
    state: rides,
  },
});

async function contactAnnonceur(text: string) {
  const instance = modal.open();

  const shouldIncrement = await instance.result;

  if (shouldIncrement) {
    count.value++;

    toast.add({
      title: `Success: ${shouldIncrement}`,
      color: "success",
      id: "modal-success",
    });

    // Update the count
    modal.patch({
      count: count.value,
    });
    return;
  }
}

function getRowItems(row: any): unknown {
  return [
    {
      label: "View Details",
      icon: "i-lucide-eye",
      action: () => {
        console.log("Viewing details for row:", row.original);
        toast.success(
          `Viewing details for ride: ${row.original.depart} → ${row.original.arrivee}`
        );
      },
    },
    {
      label: "Contacter",
      icon: "i-lucide-edit",
      onSelect() {
        contactAnnonceur(
          `Bonjour, je suis intéressé par le trajet de ${
            row.original.depart
          } à ${
            row.original.arrivee
          } prévu pour le ${row.original.date.toLocaleDateString()}.`
        );
      },
    },
    {
      label: "Delete",
      icon: "i-lucide-trash",
      action: () => {
        console.log("Deleting row:", row.original);
        toast.error(
          `Deleted ride: ${row.original.depart} → ${row.original.arrivee}`
        );
        rides.value = rides.value.filter((ride) => ride.id !== row.original.id);
      },
    },
  ];
}
</script>
<template>
  <div>
    <UTable
      :columns="columns"
      :data="rides"
      class="shrink-0"
      :ui="{
        base: 'table-fixed border-separate border-spacing-0',
        thead: '[&>tr]:bg-(--ui-bg-elevated)/50 [&>tr]:after:content-none',
        tbody: '[&>tr]:last:[&>td]:border-b-0',
        th: 'py-1 first:rounded-l-[calc(var(--ui-radius)*2)] last:rounded-r-[calc(var(--ui-radius)*2)] border-y border-(--ui-border) first:border-l last:border-r',
        td: 'border-b border-(--ui-border)',
      }"
    >
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
  </div>
</template>
<style scoped></style>
