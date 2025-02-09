<script lang="ts" setup>
definePageMeta({
  path: '/private/admin',
  layout: 'private-admin',
  middleware: 'validate-auth',
})
</script>

<template>
  <div class="flex items-center justify-center w-full h-full">
    <h1 class="block text-2xl font-bold">
      This page is empty for now
    </h1>
  </div>
</template>

<style>

</style>
