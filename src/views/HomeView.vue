<script setup lang="ts">
import { onMounted } from 'vue'
import { useCurrencyStore } from '@/stores/currency.ts'

const currencyStore = useCurrencyStore()

onMounted(async () => {
  await currencyStore.getCurrencies()
})
</script>

<template>
  <div>

  </div>
</template>
