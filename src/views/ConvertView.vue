<script setup lang="ts">
import TheCard from '@/components/base/TheCard.vue'
import TheInput from '@/components/base/TheInput.vue'
import TheSelect from '@/components/base/TheSelect.vue'
import { computed, ref, watch } from 'vue'
import { useCurrencyStore } from '@/stores/currency.ts'
import { listWithoutValue } from '@/services/listWithoutValue.ts'

const currencyStore = useCurrencyStore()

const firstCurrencyType = ref(currencyStore.currentCurrency)
const secondCurrencyType = ref(
  currencyStore.baseCurrencies.find((value) => value !== firstCurrencyType.value) || 'usd'
)

const rawFirstValue = ref(1)
const rawSecondValue = ref(
  convert(rawFirstValue.value, firstCurrencyType.value, secondCurrencyType.value)
)

const firstCurrencyValue = computed({
  get() {
    return rawFirstValue.value
  },
  set(val: number) {
    rawFirstValue.value = val
    rawSecondValue.value = convert(val, firstCurrencyType.value, secondCurrencyType.value)
  },
})

const secondCurrencyValue = computed({
  get() {
    return rawSecondValue.value
  },
  set(val: number) {
    rawSecondValue.value = val
    rawFirstValue.value = convert(val, secondCurrencyType.value, firstCurrencyType.value)
  },
})

watch([firstCurrencyType, secondCurrencyType], () => {
  rawSecondValue.value = convert(rawFirstValue.value, firstCurrencyType.value, secondCurrencyType.value)
})

function convert(amount: number, from: string, to: string): number {
  return Number(Number(currencyStore.getConvertingValue(from, to) * amount).toFixed(2))
}
</script>
<template>
  <div class="convert-view">
    <TheCard>
      <TheInput v-model="firstCurrencyValue" type="number" />
      <TheSelect
        :options-list="listWithoutValue(currencyStore.currencyNames, secondCurrencyType)"
        v-model="firstCurrencyType"
      />
    </TheCard>
    <TheCard>
      <TheInput v-model="secondCurrencyValue" type="number" />
      <TheSelect
        :options-list="listWithoutValue(currencyStore.currencyNames, firstCurrencyType)"
        v-model="secondCurrencyType"
      />
    </TheCard>
  </div>
</template>

<style>
.convert-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
