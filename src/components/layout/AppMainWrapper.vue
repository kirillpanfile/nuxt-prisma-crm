<script lang="ts" setup>
defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div class="flex flex-wrap items-center justify-between mb-2 space-y-2 gap-x-4">
    <div v-if="title || description">
      <h2 v-if="title" class="text-2xl font-bold tracking-tight">
        {{ title }}
      </h2>
      <p v-if="description" class="text-muted-foreground">
        {{ description }}
      </p>
    </div>
    <slot name="actions" />
  </div>
  <div class="flex-1 px-4 py-1 -mx-4 overflow-auto lg:flex-row lg:space-x-12 lg:space-y-0">
    <slot />
  </div>
</template>
