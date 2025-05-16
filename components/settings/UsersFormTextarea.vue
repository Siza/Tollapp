<script setup lang="ts">
// Define props.
const props = defineProps<{
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  name: string;
  description?: string;
  placeholder?: string;
  modelValue?: string | number;
  loading?: boolean;
}>();
// Model binding.
const modelValue = defineModel<string>();
</script>
<template>
  <UFormField
    :name="props.name"
    :label="props.label"
    :required="props.required"
    :description="props.description"
    :error="props.error"
    class="flex max-sm:flex-col justify-between items-start gap-4"
    :ui="{ container: 'w-full' }"
  >
    <UTextarea
      v-model="modelValue"
      :placeholder="props.placeholder"
      :rows="5"
      :loading="props.loading"
      class="w-full"
    />
  </UFormField>
</template>
