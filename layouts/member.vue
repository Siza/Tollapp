<script setup lang="ts">
const links = [
  {
    label: "Home",
    icon: "i-heroicons-home",
    to: "/dashboard",
    tooltip: {
      text: "Home",
      shortcuts: ["G", "H"],
    },
  },
  {
    label: "Annonceurs",
    icon: "i-heroicons-inbox",
    to: "/annonceurs",
  },
  {
    label: "Convoyeurs",
    icon: "i-heroicons-user-group",
    to: "/convoyeurs",
  },
  {
    label: "Settings",
    icon: "i-heroicons-cog-8-tooth",
    children: [
      {
        label: "General",
        to: "/settings",
      },
      {
        label: "Members",
      },
      {
        label: "Notifications",
      },
    ],
  },
];
</script>

<template>
  <UDashboardLayout>
    <UDashboardPanel
      :width="300"
      :resizable="{ min: 200, max: 400 }"
      collapsible
    >
      <UDashboardNavbar>
        <template #left> toto </template>
      </UDashboardNavbar>

      <UDashboardSidebar>
        <UDashboardSidebarLinks :links="links" />
        <UDivider class="sticky bottom-0" />

        <template #footer>
          <!-- ~/components/UserDropdown.vue -->
          <UserDropdown />
        </template>
      </UDashboardSidebar>
    </UDashboardPanel>
    <slot />
  </UDashboardLayout>
</template>
