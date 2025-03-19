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
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Convoiturage" />

      <UDashboardToolbar class="py-0 px-1.5 overflow-x-auto">
        <UHorizontalNavigation :links="links" />
      </UDashboardToolbar>

      <NuxtPage />
    </UDashboardPanel>
  </UDashboardPage>
</template>
<style scoped></style>
