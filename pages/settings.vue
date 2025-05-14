<script setup lang="ts">
definePageMeta({
  middleware: ["authenticated-toll"],
});
const links = [
  [
    {
      label: "General",
      icon: "i-heroicons-user-circle",
      to: "/settings",
      exact: true,
    },
    {
      label: "Members",
      icon: "i-heroicons-user-group",
      to: "/settings/professional",
    },
    {
      label: "Security",
      icon: "i-lucide-shield",
      to: "/settings/security",
    },
    {
      label: "Statuts",
      icon: "i-heroicons-user-circle",
      to: "/settings/statuts",
    },
    //   {
    //     label: "Notifications",
    //     icon: "i-heroicons-bell",
    //     to: "/settings/notifications",
    //   },
    // ],
    // [
    //   {
    //     label: "Documentation",
    //     icon: "i-heroicons-book-open",
    //     to: "https://ui.nuxt.com/pro",
    //     target: "_blank",
    //   },
    //   {
    //     label: "Buy now",
    //     icon: "i-heroicons-credit-card",
    //     to: "https://ui.nuxt.com/pro/purchase",
    //     target: "_blank",
    //   },
  ],
];
</script>

<template>
  <UDashboardPanel id="settings">
    <template #header>
      <UDashboardNavbar title="Settings">
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
