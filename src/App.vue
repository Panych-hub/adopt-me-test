<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseHeader from '@/components/BaseHeader.vue'
import { MadeBy } from '@/components'
</script>

<template>
  <BaseHeader />
  <RouterView />
  <MadeBy />
</template>

<style scoped></style>
