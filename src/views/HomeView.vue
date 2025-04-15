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
    <TransitionGroup name="card-fade" tag="div" class="home-view__cards">
      <template v-for="currency of currencyStore.baseCurrencies" :key="`base-${currency}`">
        <TheCard v-if="currency !== currencyStore.currentCurrency">
          1 {{ currencyStore.currentCurrency }} =
          {{ currencyStore.getConvertingValue(currencyStore.currentCurrency, currency) }}
          {{ currency }}
        </TheCard>
      </template>

      <template v-for="(currency, key) of currencyStore.addedCurrencies" :key="`added-${currency}`">
        <TheCard
          v-if="currency !== currencyStore.currentCurrency"
          class="home-view__the-card"
        >
          1 {{ currencyStore.currentCurrency }} =
          {{ currencyStore.getConvertingValue(currencyStore.currentCurrency, currency) }}
          <TheSelect
            v-if="[...currencyStore.notSelectedCurrencies, currency].length > 1"
            :options-list="[...currencyStore.notSelectedCurrencies, currency]"
            v-model="currencyStore.addedCurrencies[key]"
          />
          <template v-else>{{currency}}</template>
          <DeleteButton class="home-view__delete-button" @delete="currencyStore.removeCurrency(currency)" />
        </TheCard>
      </template>
    </TransitionGroup>
    <AddButton
      @add="currencyStore.addCurrency"
      v-if="currencyStore.notSelectedCurrencies.length"
    />
  </div>
</template>

<style scoped>
.home-view {
  text-transform: uppercase;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.home-view__cards {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.home-view__the-card {
  position: relative;
  gap: 4px;
}
.home-view__delete-button {
  position: absolute;
  right: 10px;
}
.card-fade-enter-active,
.card-fade-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s ease,
    max-height 0.4s ease,
    padding 0.4s ease,
    margin 0.4s ease;
  overflow: hidden;
}

.card-fade-enter-from,
.card-fade-leave-to {
  opacity: 0;
  transform: translateX(10px);
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
}

.card-fade-enter-to,
.card-fade-leave-from {
  max-height: 200px;
}
</style>
