<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
//import type { Mail } from "~/types";

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
  date: string;
}
definePageMeta({
  layout: "member",
});

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

const { $db, $auth } = useNuxtApp();
const userId = useCurrentUser().value?.uid;
const conversationRef = collection($db, "conversations");
const conversationIds = ref<string[]>([]);
const q = query(
  conversationRef,
  where("participants", "array-contains", userId)
);
const docSnap = await getDocs(q);
if (docSnap.empty) {
  console.log("No conversations found for user:", userId);
} else {
  console.log("Conversations for user:", userId);
  docSnap.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    conversationIds.value.push(doc.id);
  });
}
console.log("Conversation IDs:", conversationIds.value);
// Référence à la sous-collection 'messages' de la conversation
//const messagesRef = collection(db, "conversations", conversationId, "messages");

// Récupérer tous les messages de la conversation
//const snapshot = await getDocs(messagesRef);

// const messages = snapshot.docs.map((doc) => ({
//   id: doc.id,
//   ...doc.data(),
// }));

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
