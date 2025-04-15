<script setup lang="ts">
</script>

<template>
  <div class="currency-card__card">
    <slot />
  </div>
</template>

<style scoped>
.currency-card__card {
  width: 100%;
  display: flex;
  justify-content: center;
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
</style>
