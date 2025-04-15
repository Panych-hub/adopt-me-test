<script setup lang="ts">
defineProps<{
  canRemove?: boolean
  currentCurrency: string
  convertingCurrency: string
  convertingValue: number
}>()
</script>

<template>
  <div class="currency-card__card">
    1 {{currentCurrency}} = {{convertingValue}} {{convertingCurrency}}
  </div>
</template>

<style scoped>
.currency-card__card {
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 16px 20px;
  color: var(--color-text);
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease, transform 0.2s ease;
}

.currency-card__card:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}
</style>
