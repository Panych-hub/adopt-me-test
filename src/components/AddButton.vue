<script setup lang="ts">
const emit = defineEmits<{ add: [] }>()
const handleClick = () => {
  emit('add')
}
</script>

<template>
  <button class="icon-button" @click="handleClick">+</button>
</template>

<style scoped>
.icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  font-size: 20px;
  font-weight: bold;
  color: var(--color-text);
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  cursor: pointer;
  transition:
    background-color 0.3s,
    border-color 0.3s,
    transform 0.2s;
}

.icon-button:hover {
  background-color: var(--color-background-mute);
  border-color: var(--color-border-hover);
  transform: scale(1.05);
}
</style>
