<script setup lang="ts" generic="T">

defineProps<{ optionsList: T[] }>()
const modelValue = defineModel<T>({ required: true })

</script>

<template>
  <div class="the-select">
    <select v-model="modelValue">
      <option v-for="key in optionsList" :key="key" :value="key"  class="the-select__option">
        {{ key }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.the-select {
  display: inline-block;
}
select {
  text-transform: uppercase;
}
select {
  background-color: var(--color-background-soft);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
  font-family: inherit;
  cursor: pointer;
  appearance: none;
  transition:
    border-color 0.3s ease,
    background-color 0.3s ease;
}

select:hover {
  border-color: var(--color-border-hover);
}

select:focus {
  outline: none;
  border-color: var(--vt-c-indigo);
  box-shadow: 0 0 0 3px rgba(44, 62, 80, 0.1);
}
</style>
