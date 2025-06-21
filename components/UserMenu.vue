<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";
import { signOut } from "firebase/auth";

defineProps<{
  collapsed?: boolean;
}>();

// const user = ref({
//   name: "Benjamin Canac",
//   avatar: {
//     src: "https://github.com/benjamincanac.png",
//     alt: "Benjamin Canac",
//   },
// });
const user = useCurrentUser();
console.log("User: ", user.value);
const items = computed<DropdownMenuItem[][]>(() => [
  [
    {
      type: "label",
      label: "user?.value.email",
    },
  ],
  [
    {
      label: "Profile",
      icon: "i-lucide-user",
    },
    {
      label: "Billing",
      icon: "i-lucide-credit-card",
    },
    {
      label: "Settings",
      icon: "i-lucide-settings",
      to: "/settings",
    },
  ],
  [
    {
      label: "Log out",
      icon: "i-lucide-log-out",
      onSelect: handleSignOut,
    },
  ],
]);

const { $auth } = useNuxtApp();

async function handleSignOut() {
  await signOut($auth);
  await navigateTo("/");
}
</script>

<template>
  <UDropdownMenu
    :items="items"
    :content="{ align: 'center', collisionPadding: 12 }"
    :ui="{
      content: collapsed ? 'w-48' : 'w-(--reka-dropdown-menu-trigger-width)',
    }"
  >
    <UButton
      v-bind="{
        label: collapsed ? undefined : user?.email,
        trailingIcon: collapsed ? undefined : 'i-lucide-chevrons-up-down',
      }"
      color="neutral"
      variant="ghost"
      block
      :square="collapsed"
      class="data-[state=open]:bg-(--ui-bg-elevated)"
      :ui="{
        trailingIcon: 'text-(--ui-text-dimmed)',
      }"
    />

    <template #chip-leading="{ item }">
      <span
        :style="{ '--chip': `var(--color-${(item as any).chip}-400)` }"
        class="ms-0.5 size-2 rounded-full bg-(--chip)"
      />
    </template>
  </UDropdownMenu>
</template>
