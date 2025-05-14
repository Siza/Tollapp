<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
import { doc, getDoc, setDoc } from "firebase/firestore";
definePageMeta({
  middleware: ["authenticated-toll"],
});
const links = [
  [
    {
      label: "Mes Annonces",
      icon: "i-heroicons-user-circle",
      to: "/annonceurs",
      exact: true,
    },
    {
      label: "Définir un Trajet",
      icon: "i-heroicons-user-group",
      to: "/annonceurs/ride",
    },
  ],
];
</script>
<template>
  <UDashboardPanel id="" annonceurs>
    <template #header>
      <UDashboardNavbar title="Convoiturage">
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
      </UDashboardNavbar>

      <UDashboardToolbar>
        <UNavigationMenu :items="links" highlight class="-mx-1 flex-1" />
      </UDashboardToolbar>
    </template>

    <template #body>
      <NuxtPage />
    </template>
  </UDashboardPanel>
</template>
<style scoped></style>
