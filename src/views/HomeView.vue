<script setup lang="ts">
import { onMounted } from 'vue'
import { useCurrencyStore } from '@/stores/currency.ts'
import AddButton from '@/components/AddButton.vue'
import TheCard from '@/components/base/TheCard.vue'
import TheSelect from '@/components/base/TheSelect.vue'
import DeleteButton from '@/components/DeleteButton.vue'

const currencyStore = useCurrencyStore()

onMounted(async () => {
  await currencyStore.getCurrencies()
  if (!currencyStore.currentCurrency) currencyStore.currentCurrency = 'rub'
})
</script>

<template>
  <div v-if="currencyStore.currentCurrency" class="home-view">
    <template v-for="currency of currencyStore.baseCurrencies" :key="currency">
      <TheCard v-if="currency !== currencyStore.currentCurrency">
        1 {{ currencyStore.currentCurrency }} =
        {{ currencyStore.getConvertingValue(currencyStore.currentCurrency, currency) }}
        {{ currency }}
      </TheCard>
    </template>
    <AddButton @add="currencyStore.addCurrency" />
    {{currencyStore.addedCurrencies}}
    <template v-for="(currency, key) of currencyStore.addedCurrencies" :key="currency">
      <TheCard
        v-if="currency !== currencyStore.currentCurrency"
        class="home-view__the-card"
      >
        1 {{ currencyStore.currentCurrency }} =
        {{ currencyStore.getConvertingValue(currencyStore.currentCurrency, currency) }}
        {{ currency }}
        <TheSelect :options-list="currencyStore.notSelectedCurrencies" v-model="currencyStore.addedCurrencies[key]" />
        <DeleteButton class="home-view__delete-button" @delete="currencyStore.removeCurrency(currency)"/>
      </TheCard>
    </template>
  </div>
</template>

<style scoped>
.home-view {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home-view__the-card {
  position: relative;
}
.home-view__delete-button {
  position: absolute;
  right: 10px;
}
</style>
