<script setup lang="ts">
import TheHeader from '@/components/base/TheHeader.vue'
import { RouterLink } from 'vue-router'
import CurrencyOptions from '@/components/CurrencyOptions.vue'
</script>

<template>
  <TheHeader>
    <RouterLink to="/">Главная</RouterLink>
    <RouterLink to="/convert">Конвертация</RouterLink>
    <CurrencyOptions />
  </TheHeader>
</template>

<style scoped></style>
