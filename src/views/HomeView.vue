<script setup lang="ts">
import { onMounted } from 'vue'
import Api from '@/api'

onMounted(async () => {
  await Api.currency.getCurrency()
})
</script>

<template>
</template>
