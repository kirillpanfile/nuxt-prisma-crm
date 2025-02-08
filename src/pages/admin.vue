<script lang="ts" setup>
// import useHttpRequest from '../hooks/useHttpRequest'

definePageMeta({
  path: '/private/admin',
  layout: 'private-admin',
  middleware: 'validate-auth',
})

// const { data, error } = await useAsyncData(async () => {
//   return await useHttpRequest('/api/private/get-clients')
// })
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
