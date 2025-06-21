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
const UCheckbox = resolveComponent("UCheckbox");
const UDropdownMenu = resolveComponent("UDropdownMenu");
const UButton = resolveComponent("UButton");
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
    id: "idBase",
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
const convoyeurs = ref([]);
const columnVisibility = ref({
  idBase: false,
});

function getRowItems(row) {
  return [
    {
      type: "label",
      label: "Actions",
    },
    {
      label: "Take the ride " + row.original.idBase,
      async onSelect() {
        // Ajouter le convoyeur dans la base de données
        await setDoc(
          doc($db, "rides", row.original.idBase),
          {
            convoyeurIDs: [...convoyeurs.value, useCurrentUser().value.uid],
          },
          { merge: true }
        );

        // const docRef = await addDoc(collection($db, "relationships"), {
        //   createdAt: Date.now(),
        //   annonce: row.original.idBase,
        //   annonceurID: row.original.idAnnonceur,
        //   convoyeurID: useCurrentUser().value.uid,
        //   status: "pending",
        // });
        toast.add({
          title: "My rides updated",
          icon: "i-heroicons-check-circle",
        });
        // navigateTo({ path: "/convoyeurs/ride/" + row.original.idBase });
        // navigate(row.original.idBase);
      },
    },
    {
      type: "separator",
    },
    {
      label: "View customer",
    },
    {
      label: "View payment details",
    },
  ];
}

function navigate(p) {
  navigateTo({ path: "/convoyeurs/ride/" + p });
}

const rides = ref([]);
const { $db, $auth } = useNuxtApp();
const user = useCurrentUser();
const citiesRef = collection($db, "rides");

const querySnapshot = await getDocs(citiesRef);
let index = 0;

querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  const state = {
    id: "",
    idBase: "",
    idAnnonceur: "",
    depart: "",
    arrivee: "",
    date: "",
    cout: "",
    convoyeurIDs: [],
  };

  state.id = index++;
  state.idBase = doc.id;
  state.annonce = doc.id;
  state.idAnnonceur = doc.data()?.userId;
  state.depart = doc.data()?.departure?.city;
  state.arrivee = doc.data()?.arrival?.city;
  const mydate = doc.data()?.dateExpected;
  console.log(mydate.toDate());
  state.date = mydate.toDate();
  state.cout = doc.data()?.tarif;
  convoyeurs.value = doc.data()?.convoyeurIDs || [];
  rides.value.push(state);
});

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
// const modal = useModal();
const count = ref(0);

function openModal() {
  count.value += 1;

  // modal.open(ModalAvertissement, {
  //   count: count.value,
  //   onSuccess() {
  //     toast.add({
  //       title: "Success !",
  //       id: "modal-success",
  //     });
  //   },
  // });
}
function suc() {
  console.log("emit");
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
