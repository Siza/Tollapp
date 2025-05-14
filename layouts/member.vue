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
const open = ref(false);
</script>

<template>
  <UDashboardGroup>
    <UDashboardSidebar
      v-model:open="open"
      collapsible
      resizable
      class="bg-(--ui-bg-elevated)/25"
      :ui="{ footer: 'lg:border-t lg:border-(--ui-border)' }"
    >
      <template #header="{ collapsed }"> Convoyeur App </template>
      <template #default="{ collapsed }">
        <UNavigationMenu
          :collapsed="collapsed"
          :items="links"
          orientation="vertical"
        />
      </template>
      <template #footer="{ collapsed }">
        <UserMenu :collapsed="collapsed" />
      </template>
    </UDashboardSidebar>

    <slot />
  </UDashboardGroup>
</template>
