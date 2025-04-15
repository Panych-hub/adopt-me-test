import { defineStore } from 'pinia'

export const useCurrencyStore = defineStore('currency', () => {
  return { count, doubleCount, increment }
})
