<script setup lang="ts">
//Define props.
const props = defineProps<{
  id: string;
  inputType: string;
  label: string;
  error?: string;
  icon?: string;
  required?: boolean;
  name: string;
  description?: string;
  placeholder?: string;
  modelValue?: string | number;
  loading?: boolean;
}>();

// Model binding.
const modelValue = defineModel<string | number>();
</script>

<template>
  <UFormField
    :name="props.name"
    :label="props.label"
    :required="props.required"
    :description="props.description"
    class="grid grid-cols-2 gap-2 items-center"
    :error="props.error"
  >
    <UInput
      v-model="modelValue"
      :type="props.inputType"
      :icon="props.icon"
      :placeholder="props.placeholder"
    />
  </UFormField>
</template>
