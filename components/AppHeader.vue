<script setup lang="ts">
import type { NavItem } from "@nuxt/content";

const navigation = inject<Ref<NavItem[]>>("navigation", ref([]));

const links = [
  {
    label: "Convoyeurs",
  },
  {
    label: "Annonceurs",
  },
  {
    label: "Blog",
  },
];

const currentUser = useCurrentUser();
console.log("currentUser: ", currentUser.value);
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      La platforme de convoyage
      <UBadge label="beta" variant="subtle" class="mb-0.5" />
    </template>

    <template #right>
      <UButton v-if="!currentUser" label="Connexion" color="gray" to="/login" />
      <UButton v-else label="Dashboard" color="gray" to="/dashboard" />
      <UButton
        v-if="!currentUser"
        label="Inscription"
        icon="i-heroicons-arrow-right-20-solid"
        trailing
        color="black"
        to="/signup"
        class="hidden lg:flex"
      />
    </template>

    <!-- <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" default-open />
    </template> -->
  </UHeader>
</template>
