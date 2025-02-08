<script lang="ts" setup>
definePageMeta({
  path: '/private/admin',
  layout: false,
})

const { data } = await useAsyncData(() => $fetch('/api/get-clients'))
</script>

<template>
  <div>
    Admin Page
    {{ data }}
  </div>
</template>

<style>

</style>
