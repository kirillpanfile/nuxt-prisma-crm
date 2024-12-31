<script setup lang="ts">

import { ChevronDown } from 'lucide-vue-next'
import { SelectIcon, SelectTrigger, type SelectTriggerProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<SelectTriggerProps & { prefix?: string, class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, prefix, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <select-trigger
    v-bind="forwardedProps"
    :class="cn(
      'flex h-10 w-full items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate text-start',
      props.class,
    )"
  >
    <p v-if="prefix">
      {{ prefix }}
    </p>
    <slot />
    <select-icon as-child class="ml-auto">
      <chevron-down class="w-4 h-4 opacity-50 shrink-0" />
    </select-icon>
  </select-trigger>
</template>
