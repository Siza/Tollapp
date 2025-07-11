<script setup lang="ts">
import { format, isToday } from "date-fns";
import type { Mail } from "~/types";

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

const props = defineProps<{
  mails: Mail[];
}>();

const mailsRefs = ref<Element[]>([]);

const selectedMail = defineModel<Mail | null>();

watch(selectedMail, () => {
  if (!selectedMail.value) {
    return;
  }
  const ref = mailsRefs.value[selectedMail.value.id];
  if (ref) {
    ref.scrollIntoView({ block: "nearest" });
  }
});

defineShortcuts({
  arrowdown: () => {
    const index = props.mails.findIndex(
      (mail) => mail.id === selectedMail.value?.id
    );

    if (index === -1) {
      selectedMail.value = props.mails[0];
    } else if (index < props.mails.length - 1) {
      selectedMail.value = props.mails[index + 1];
    }
  },
  arrowup: () => {
    const index = props.mails.findIndex(
      (mail) => mail.id === selectedMail.value?.id
    );

    if (index === -1) {
      selectedMail.value = props.mails[props.mails.length - 1];
    } else if (index > 0) {
      selectedMail.value = props.mails[index - 1];
    }
  },
});
function selectedConversation(mailId: string) {
  console.log("Selected conversation:");
  navigateTo("/inbox/" + mailId);
}
</script>

<template>
  <div class="overflow-y-auto divide-y divide-default">
    <div
      v-for="(mail, index) in mails"
      :key="index"
      :ref="el => { mailsRefs[mail.id] = el as Element }"
    >
      <div
        class="p-4 sm:px-6 text-sm cursor-pointer border-l-2 transition-colors"
        :class="[
          mail.unread ? 'text-highlighted' : 'text-toned)',
          selectedMail && selectedMail.id === mail.id
            ? 'border-primary bg-primary/10'
            : 'border-(--ui-bg) hover:border-primary hover:bg-primary/5',
        ]"
        @click="selectedConversation(mail.id)"
      >
        <div
          class="flex items-center justify-between"
          :class="[mail.unread && 'font-semibold']"
        >
          <div class="flex items-center gap-3">
            {{ mail.from.name }}

            <UChip v-if="mail.unread" />
          </div>

          <span>{{
             isToday(mail.date)
              ? 'Aujourd’hui'
              : mail.date.toDate().toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })
          }}</span>
        </div>
        <p class="truncate" :class="[mail.unread && 'font-semibold']">
          {{ mail.subject }}
        </p>
        <!-- <p class="text-dimmed line-clamp-1">
          {{ mail.body }}
        </p> -->
      </div>
    </div>
  </div>
</template>
