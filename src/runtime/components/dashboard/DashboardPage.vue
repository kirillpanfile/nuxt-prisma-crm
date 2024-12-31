<script setup lang="ts">

</script>

<template>
  <main class="flex flex-col w-full h-full">
    <h1 class="text-2xl font-bold">
      <slot name="title" />
    </h1>
    <div class="flex flex-col gap-y-6">
      <slot />
    </div>
  </main>
</template>
