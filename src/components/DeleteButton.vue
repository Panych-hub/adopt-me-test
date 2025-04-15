<script setup lang="ts">
const emit = defineEmits<{ delete: [] }>()
const handleRemove = () => {
  emit('delete')
}
</script>

<template>
  <button class="delete-button" @click="handleRemove" aria-label="Удалить">
    <svg viewBox="0 0 24 24" class="icon">
      <path
        fill="currentColor"
        d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7a1 1 0 0 0-1.41 1.41L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4Z"
      />
    </svg>
  </button>
</template>

<style scoped>
.delete-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.delete-button:hover {
  background-color: var(--color-background-mute);
}

.icon {
  width: 18px;
  height: 18px;
  color: var(--color-text);
}
</style>
