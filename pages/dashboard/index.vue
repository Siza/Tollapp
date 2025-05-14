<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";
import { doc, getDoc, setDoc } from "firebase/firestore";
definePageMeta({
  layout: "member",
});

const state = reactive({
  marques: "",
  modele: "",
  energie: "",
  imat: "",
  depart: "",
  arrivee: "",
});
</script>
<template>
  <UDashboardPanel>
    <UDashboardPanel>
      <UPageCard> Dashboard </UPageCard>
    </UDashboardPanel>
  </UDashboardPanel>
</template>
<style scoped></style>
