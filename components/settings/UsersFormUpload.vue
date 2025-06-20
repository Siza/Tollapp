<template>
  <UFormField
    :name="state.name"
    :ui="{
      root: 'flex max-sm:flex-col justify-between sm:items-center gap-4',
      wrapper: '',
      container: 'mt-1 relative flex max-sm:flex-col',
    }"
  >
    <template #label>
      <div class="flex items-center gap-2">
        <span class="text-lg font-semibold">{{ props.state.label }}</span>
      </div>
    </template>
    <template #description>
      <span class="text-sm text-gray-600">{{ state.description }}</span>
    </template>
    <div>
      <UBadge class="font-bold rounded-full">{{ labelBadge }}</UBadge>
    </div>
    <span v-if="state.filename" class="text-sm text-gray-600">
      {{ state.filename }}
    </span>
    <div>
      <UButton label="Choose" color="neutral" @click="onFileClick" />
      <input
        ref="fileRef"
        type="file"
        class="hidden"
        accept=".jpg, .jpeg, .png, .gif"
        @change="$emit('onFileChange', $event, 'permis')"
      />
    </div>
  </UFormField>
</template>
<script setup lang="ts">
const props = defineProps<{
  state: {
    label: string;
    description: string;
    badge: number | string; // Assuming badge can be a number or string
    name: string;
    labelButton: string;
    filename?: string;
  };
}>();

console.log("props", props.state.filename);
const badge = ref(props.state.badge);
watchEffect(() => {
  badge.value = props.state.badge;
});
const labelBadge = ref("");
switch (badge.value.toString()) {
  // Assuming badge is a number representing the status
  case "0":
    labelBadge.value = "En attente de téléchargement";
    break;
  case "1":
    labelBadge.value = "En attente de validation";
    break;
  case "2":
    labelBadge.value = "Validé";
    break;
  case "3":
    labelBadge.value = "Rejeté";
    break;
  default:
    labelBadge.value = "Statut inconnu";
    break;
}
const fileRef = ref<HTMLInputElement>();

function onFileClick() {
  fileRef.value?.click();
}
</script>
