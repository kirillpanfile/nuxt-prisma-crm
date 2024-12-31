<script setup lang="ts">

import { DialogDescription, type DialogDescriptionProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<DialogDescriptionProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <dialog-description
    v-bind="forwardedProps"
    :class="cn('w-0 h-0 hidden invisible', props.class)"
  >
    <slot />
  </dialog-description>
</template>
