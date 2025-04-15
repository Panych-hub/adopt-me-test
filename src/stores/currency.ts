import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import Api from '@/api'
import type { CurrencyList, CurrencyObject } from '@/types'
import { listWithoutValue } from '@/services/listWithoutValue.ts'

export const useCurrencyStore = defineStore('currency', () => {
  const currentCurrency = ref<string>()
  const currenciesList = ref<CurrencyList>({})
  const baseCurrencies: string[] = ['rub', 'usd', 'eur']
  const addedCurrencies = ref<string[]>([])
  const currencyNames = computed(() => Object.keys(currenciesList.value))
  const notSelectedCurrencies = computed(() => {
    const selected = new Set([...baseCurrencies, ...addedCurrencies.value, currentCurrency.value])
    return currencyNames.value.filter(name => !selected.has(name))
  })

  function parseCurrencies(currencyObject: CurrencyObject) {
    Object.entries(currencyObject).forEach(([key, value]) => {
      const currencies = key.split('-')
      if (currencies.length !== 2) return
      if (!currenciesList.value[currencies[0]]) {
        currenciesList.value[currencies[0]] = {}
      }
      currenciesList.value[currencies[0]][currencies[1]] = value
    })
  }

  async function getCurrencies() {
    const currencyObject = await Api.currency.getCurrency()
    parseCurrencies(currencyObject)
  }

  function getConvertingValue(current: string, converting: string) {
    return currenciesList.value[current][converting]
  }
  function selectCurrency(currency: string) {
    currentCurrency.value = currency
  }
  function addCurrency() {
    addedCurrencies.value.push(notSelectedCurrencies.value[0])
  }

  function removeCurrency(currency: string) {
    addedCurrencies.value = listWithoutValue(addedCurrencies.value, currency)
  }
  return {
    currentCurrency,
    currenciesList,
    baseCurrencies,
    addedCurrencies,
    currencyNames,
    getCurrencies,
    addCurrency,
    removeCurrency,
    selectCurrency,
    getConvertingValue,
    notSelectedCurrencies
  }
},
  {
    persist: true
  }
)
