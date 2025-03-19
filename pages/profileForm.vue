<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Home"></UDashboardNavbar>
      <UDashboardPanelContent>
        <UForm :state="state" class="space-y-4" @submit="onSubmit">
          <UFormGroup label="Prénom" name="firstname">
            <UInput v-model="state.firstname" />
          </UFormGroup>

          <UFormGroup label="Nom" name="lastname">
            <UInput v-model="state.lastname" />
          </UFormGroup>

          <UButton type="submit"> Submit </UButton>
        </UForm>
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardPage>
</template>

<script setup lang="ts">
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useIsCurrentUserLoaded } from "vuefire";
const { $db, $auth } = useNuxtApp();
definePageMeta({
  middleware: ["authenticated-toll"],
  layout: "member",
});
console.log("auth: ", $auth);
const user = useCurrentUser();
const isUserLoaded = useIsCurrentUserLoaded();
console.log("user:", user.value, isUserLoaded.value);
const state = reactive({
  firstname: undefined,
  lastname: undefined,
});
if (isUserLoaded) {
  const docRef = doc($db, "users", user.value.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    state.firstname = docSnap.data().firstname;
    state.lastname = docSnap.data().lastname;
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}
const counter = useState("counter");
//console.log(counter.value);

async function onSubmit(event) {
  // Do something with event.data
  console.log(event.data.firstname);
  const docRef = await setDoc(doc($db, "users", user.value.uid), {
    firstname: event.data.firstname,
    lastname: event.data.lastname,
  });
}
</script>

<style scoped></style>
