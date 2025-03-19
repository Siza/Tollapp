<script lang="ts" setup>
defineProps({
  count: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["success", "someEvent"]);

function onSuccess() {
  emit("success");
}
const open = ref(false);
const state = reactive({
  name: undefined,
  email: undefined,
});

const toast = useToast();
async function onSubmit(event) {
  toast.add({
    title: "Success",
    description: `New customer ${event.data.name} added`,
    color: "success",
  });
  open.value = false;
}
</script>

<template>
  <UModal
    v-model:open="open"
    title="New customer"
    description="Add a new customer to the database"
  >
    <UButton label="New customer" icon="i-lucide-plus" />

    <template #body>
      <UForm :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Name" placeholder="John Doe" name="name">
          <UInput v-model="state.name" class="w-full" />
        </UFormGroup>
        <UFormGroup
          label="Email"
          placeholder="john.doe@example.com"
          name="email"
        >
          <UInput v-model="state.email" class="w-full" />
        </UFormGroup>
        <div class="flex justify-end gap-2">
          <UButton label="Cancel" @click="open = false" />
          <UButton
            label="Create"
            color="primary"
            variant="solid"
            type="submit"
          />
        </div>
      </UForm>
    </template>
  </UModal>
</template>
