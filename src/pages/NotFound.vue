<template>
  <div class="not-found-wrapper">
    <h1 class="title">404 - Page Not Found</h1>
    <p class="description">The page you are looking for does not exist.</p>
    <router-link class="link" to="/" replace>Go To Main</router-link>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
.not-found-wrapper {
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  .title {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: red;
    font-weight: bolder;
  }
  .description {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .link {
    font-size: 1.5rem;
    color: blue;
    text-decoration: underline;
  }
}
</style>
