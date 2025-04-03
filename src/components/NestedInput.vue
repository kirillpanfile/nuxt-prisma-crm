<script lang="ts" setup>
import type { DateValue } from 'reka-ui'
import DatePicker from './DatePicker.vue'
import Input from './ui/input/Input.vue'
import Textarea from './ui/textarea/Textarea.vue'

const props = defineProps<{
  label?: string
  type?: string
  required?: boolean
  errorMessage?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', payload: string): void
  (e: 'change', payload: string | number): void
}>()

const model = defineModel<any>()

const renderableComponents = {
  text: Input,
  textarea: Textarea,
  number: Input,
  file: Input,
  date: DatePicker,
}
</script>

<template>
  <div class="flex flex-col gap-1 mt-4">
    <Label v-if="label">
      {{ label }}<span v-if="required" class="text-red-500">*</span>
    </Label>
    <component :is="renderableComponents[type]" v-model="model" :required="required" :type="type" class="!mt-1" @change="emit('change', $event)" />
    <p v-if="errorMessage" class="text-sm text-red-500">
      {{ errorMessage }}
    </p>
  </div>
</template>
