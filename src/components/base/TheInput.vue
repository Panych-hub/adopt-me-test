<script setup lang="ts" generic="T extends string | number">
defineProps<{
  placeholder?: string
  type?: string
}>()

const modelValue = defineModel<T>({ required: true })
</script>

<template>
  <input
    class="base-input"
    :placeholder="placeholder"
    :type="type || 'text'"
    v-model="modelValue"
  />
</template>

<style scoped>
.base-input {
  width: 100%;
  padding: 8px 12px;
  font-size: 14px;
  font-family: inherit;
  color: var(--color-text);
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  transition:
    border-color 0.3s ease,
    background-color 0.3s ease;
}

.base-input:hover {
  border-color: var(--color-border-hover);
}

.base-input:focus {
  outline: none;
  border-color: var(--vt-c-indigo);
  box-shadow: 0 0 0 3px rgba(44, 62, 80, 0.1);
}
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
