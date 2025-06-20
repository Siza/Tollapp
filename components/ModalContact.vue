<script setup lang="ts">
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  type DocumentData,
} from "firebase/firestore";
import { object } from "zod";

const props = defineProps<{
  state: Array<any>;
}>();
const { $db, $auth } = useNuxtApp();
console.log("ModalContact props:", props.state[0]);
const emit = defineEmits<{ close: [boolean] }>();
const message = reactive({
  body: "", // Initialize message body
});

const annonceurData = ref<DocumentData | null>(null);
const userData = ref<DocumentData | null>(null);
const docRefAnnonceur = await getDoc(
  doc($db, "users", props.state[0].idAnnonceur)
);
if (docRefAnnonceur.exists()) {
  console.log("User data:", docRefAnnonceur.data());
  annonceurData.value = docRefAnnonceur.data();
} else {
  console.error("No such user document!");
}

let docRefUser = null;
if ($auth.currentUser?.uid) {
  docRefUser = await getDoc(doc($db, "users", $auth.currentUser.uid));
  if (docRefUser.exists()) {
    console.log("Current user data:", docRefUser.data());
    userData.value = docRefUser.data();
  } else {
    console.error("No such current user document!");
  }
} else {
  console.error("No authenticated user found!");
}

const participants = computed(() => {
  return [
    {
      id: props.state[0].idAnnonceur,
      name:
        annonceurData.value?.firstname + " " + annonceurData.value?.lastname ||
        annonceurData.value?.username ||
        "Annonceur",
      avatar: annonceurData.value?.avatar || "",
    },
    {
      id: $auth.currentUser?.uid || "",
      name:
        userData.value?.firstname + " " + userData.value?.lastname ||
        userData.value?.username ||
        "You",
      avatar: userData.value?.avatar || "",
    },
  ];
});

async function onSubmit(event: any) {
  event.preventDefault(); // Prevent default form submission behavior
  if (!message.body.trim()) {
    console.error("Message cannot be empty");
    return; // Exit if the message is empty
  }

  console.log("Form submitted with message:", message.body);
  const conversationRef = await addDoc(collection($db, "conversations"), {
    createdAt: Date.now(),
    participants: participants.value,
    object: `Contact from ${props.state[0].depart} to ${props.state[0].arrivee}`,
  });

  const messagesRef = collection(conversationRef, "messages");
  await addDoc(messagesRef, {
    createdAt: Date.now(),
    from: $auth.currentUser?.uid,
    to: props.state[0].idAnnonceur,
    body: message.body,
    replyTo: null,
  });
  message.body = ""; // Clear the message input

  emit("close", true);
}
</script>

<template>
  <UModal
    :close="{ onClick: () => emit('close', false) }"
    :title="`De ${props.state[0].depart} à ${props.state[0].arrivee} pour ${props.state[0].vehicule}`"
  >
    <template #body>
      <UForm
        id="modal_contact"
        class="flex flex-col gap-4"
        :state="message"
        @submit="onSubmit"
      >
        <LazySettingsUsersFormTextarea
          id="contact-message"
          label="Message"
          name="message"
          placeholder="Type your message here..."
          v-model="message.body"
          required
          :loading="false"
          error=""
        />
        {{ message }}
      </UForm>
    </template>
    <template #footer>
      <div class="flex gap-2">
        <UButton
          color="neutral"
          label="Dismiss"
          @click="emit('close', false)"
        />
        <UButton form="modal_contact" label="Success" type="submit" />
      </div>
    </template>
  </UModal>
</template>
