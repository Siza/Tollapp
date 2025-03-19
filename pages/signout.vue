<template>
  <div></div>
</template>

<script setup lang="ts">
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
signOut(auth)
  .then(() => {
    // Sign-out successful.
  })
  .catch((error) => {
    // An error happened.
  });
</script>

<style scoped></style>
