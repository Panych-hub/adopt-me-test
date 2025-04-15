<script setup lang="ts">
import { useCurrencyStore } from '@/stores/currency.ts'
import TheSelect from '@/components/base/TheSelect.vue'

const currencyStore = useCurrencyStore()
</script>

<template>
  <TheSelect :options-list="Object.values(currencyStore.currencyNames)" v-model="currencyStore.currentCurrency" />
</template>

<style scoped>
</style>
