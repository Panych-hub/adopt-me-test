<script setup lang="ts">
import { onMounted } from 'vue'
import { useCurrencyStore } from '@/stores/currency.ts'
import CurrencyCard from '@/components/CurrencyCard.vue'

const currencyStore = useCurrencyStore()

onMounted(async () => {
  await currencyStore.getCurrencies()
})
</script>

<template>
  <div v-if="currencyStore.currentCurrency">
    <template v-for="currency of currencyStore.baseCurrencies" :key="currency">
      <CurrencyCard
        v-if="currency !== currencyStore.currentCurrency"
        :current-currency="currencyStore.currentCurrency"
        :converting-currency="currency"
        :converting-value="
          currencyStore.getConvertingValue(currencyStore.currentCurrency, currency)
        "
      />
    </template>
  </div>
</template>
