<template>
  <img alt="Origin logo" src="../assets/origin-logo.svg" />
  <HelloWorld msg="origin-vue-ts" />
  {{ t }}
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<script lang="ts" setup>
import { ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
const t = ref('te')
</script>
