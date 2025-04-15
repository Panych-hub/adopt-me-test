import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import Api from '@/api'
import type { CurrencyList, CurrencyObject } from '@/types'

export const useCurrencyStore = defineStore('currency', () => {
  const currentCurrency = ref<string>()
  const currenciesList = ref<CurrencyList>({})
  const baseCurrencies: string[] = ['rub', 'usd', 'eur']
  const addedCurrencies: string[] = []
  const currencyNames = computed(() => Object.keys(currenciesList.value))

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

  function selectCurrency(currency: string) {
    currentCurrency.value = currency
  }
  function addCurrency(currency: string) {
    addedCurrencies.push(currency)
  }

  function removeCurrency(currency: string) {
    const index = addedCurrencies.findIndex((value) => value === currency)
    addedCurrencies.splice(index, 1)
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
    selectCurrency
  }
})
