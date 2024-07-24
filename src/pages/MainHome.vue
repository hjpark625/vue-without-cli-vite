<template>
  <div>{{ text }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref('This is Home Vue');
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
div {
  color: $primary;
}
</style>
