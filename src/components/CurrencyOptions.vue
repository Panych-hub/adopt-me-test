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
  {{currencyStore.currentCurrency}}
</template>

<style scoped>

</style>
