<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { useVModel } from '@vueuse/core'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
  errorMessage?: string
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <label>
    <p class="mb-1 text-sm font-medium capitalize">{{ $attrs.label }} <span class="text-destructive">{{ $attrs.required ? '*' : '' }}</span></p>
    <input v-model="modelValue" v-bind="$attrs" :class="cn('flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 placeholder:capitalize', errorMessage && 'focus-visible:ring-destructive', props.class)">
    <p v-if="errorMessage" class="mt-1 text-sm text-destructive">{{ errorMessage }}</p>
  </label>
</template>
