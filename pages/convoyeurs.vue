<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
import { doc, getDoc, setDoc } from "firebase/firestore";
definePageMeta({
  middleware: ["authenticated-toll"],
});
const links = [
  [
    {
      label: "Convoiturages",
      icon: "i-heroicons-user-circle",
      to: "/convoyeurs",
      exact: true,
    },
    {
      label: "Mes voyages",
      icon: "i-heroicons-user-group",
      to: "/convoyeurs/rides",
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
    <UModals />
  </UDashboardPage>
</template>
<style scoped></style>
