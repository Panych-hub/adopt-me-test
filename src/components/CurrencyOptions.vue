<script setup lang="ts">
import { useCurrencyStore } from '@/stores/currency.ts'

const currencyStore = useCurrencyStore()
</script>

<template>
  <select
    v-model="currencyStore.currentCurrency"
  >
    <option v-for="key in Object.values(currencyStore.currencyNames)" :key="key" :value="key">
      {{ key }}
    </option>
  </select>
</template>

<style scoped>
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
  transition: border-color 0.3s ease, background-color 0.3s ease;
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
