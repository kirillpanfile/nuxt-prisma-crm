<script lang="ts" setup>
import { cn } from '~crm/lib/utils'

defineProps<{
  fixed?: boolean
}>()
</script>

<template>
  <main
    :class="cn(
      'peer-[.header-fixed]/header:mt-16',
      'px-4 py-6',
      fixed && 'fixed-main flex flex-grow flex-col overflow-hidden',
    )"
  >
    <slot />
  </main>
</template>

<style>

</style>
