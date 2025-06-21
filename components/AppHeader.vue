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
      <UButton
        v-if="!currentUser"
        label="Connexion"
        color="neutral"
        variant="ghost"
        to="/login"
        class="hidden lg:inline-flex"
      />
      <UButton v-else label="Dashboard" color="neutral" to="/dashboard" />
      <UButton
        v-if="!currentUser"
        label="Inscription"
        trailing-icon="i-lucide-arrow-right"
        class="hidden lg:inline-flex"
        color="neutral"
        to="/signup"
      />
    </template>

    <!-- <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" default-open />
    </template> -->
  </UHeader>
</template>
