<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '~crm/lib/utils'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number | File
  class?: HTMLAttributes['class']
  type?: HTMLInputElement['type']
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
  (e: 'change', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

const classes = cn('flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50', props.class)
</script>

<template>
  <input v-if="type !== 'file'" v-model="modelValue" :type="type" :class="classes" @change="emits('change', $event.target.value)">
  <input v-else type="file" :class="classes" @change="emits('change', $event.target.files?.[0])">
</template>
