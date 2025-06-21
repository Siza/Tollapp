<script setup lang="ts">
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
  <UDashboardPanel id="convoyeurs">
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
