<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useFirestore } from "vuefire";
//import type { Mail } from "~/types";

definePageMeta({
  layout: "member",
  middleware: ["authenticated-toll"],
});

interface User {
  id: number;
  name: string;
  email: string;
}

interface Mail {
  id: number;
  unread?: boolean;
  from: User;
  subject: string;
  body: string;
  date:  Date;
}

const tabItems = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Unread",
    value: "unread",
  },
];
const selectedTab = ref("all");

const { data: mails } = await useFetch<Mail[]>("/api/mails", {
  default: () => [],
});
const route = useRoute();
const paramsConv = ref(route.params.conversation);
const { $db, $auth } = useNuxtApp();
const userId = useCurrentUser().value?.uid;

const firestore = getFirestore();
const db = useFirestore();
const conversationsQuery = query(
  collection(db, "conversations"),
  where("users", "array-contains", userId),
  orderBy("createdAt")
);
const conversations = useCollection(
  collection(db, "conversations", paramsConv.value as string, "messages")
);
console.log("Conversations:", conversations.value);

const messagesRef = collection(
  $db,
  "conversations",
  paramsConv.value as string,
  "messages"
);
const q = query(messagesRef, orderBy("createdAt", "asc"));

// Récupérer tous les messages de la conversation
const snapshot = await getDocs(q);

const messages = snapshot.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
}));

console.log(messages);
mails.value = messages.map((message) => ({
  id: message.id,
  unread: false,
  from: {
    id: userId, // Ensure id is converted to a number
    name: userId || "", // Provide a fallback for undefined
    email: (userId || "") + "@example.com", // Replace with actual user data
  },
  subject: "message.subject",
  body: message.body,
  date: message.createdAt,
  conversationId: paramsConv.value as string,
}));

// Filter mails based on the selected tab
const filteredMails = computed(() => {
  if (selectedTab.value === "unread") {
    return mails.value.filter((mail) => !!mail.unread);
  }

  return mails.value;
});

console.log("Filtered mails:", filteredMails.value);
const selectedMail = ref<Mail | null>();

const isMailPanelOpen = computed({
  get() {
    return !!selectedMail.value;
  },
  set(value: boolean) {
    if (!value) {
      selectedMail.value = null;
    }
  },
});

// Reset selected mail if it's not in the filtered mails
watch(filteredMails, () => {
  if (!filteredMails.value.find((mail) => mail.id === selectedMail.value?.id)) {
    selectedMail.value = null;
  }
});

const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller("lg");
</script>

<template>
  <UDashboardPanel
    id="inbox-1"
    :default-size="25"
    :min-size="20"
    :max-size="30"
    resizable
  >
    <UDashboardNavbar title="Inbox">
      <template #leading>
        <UDashboardSidebarCollapse />
      </template>
      <template #trailing>
        <UBadge :label="filteredMails.length" variant="subtle" />
      </template>

      <template #right>
        <UTabs
          v-model="selectedTab"
          :items="tabItems"
          :content="false"
          size="xs"
        />
      </template>
    </UDashboardNavbar>
    <InboxList v-model="selectedMail" :mails="filteredMails" />
  </UDashboardPanel>

  <InboxMail
    v-if="selectedMail"
    :mail="selectedMail"
    @close="selectedMail = null"
  />
  <div v-else class="hidden lg:flex flex-1 items-center justify-center">
    <UIcon name="i-lucide-inbox" class="size-32 text-dimmed" />
  </div>

  <ClientOnly>
    <USlideover v-if="isMobile" v-model:open="isMailPanelOpen">
      <template #content>
        <InboxMail
          v-if="selectedMail"
          :mail="selectedMail"
          @close="selectedMail = null"
        />
      </template>
    </USlideover>
  </ClientOnly>
</template>
