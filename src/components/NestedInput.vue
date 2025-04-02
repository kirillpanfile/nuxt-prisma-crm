<script lang="ts" setup>
import { useField } from 'vee-validate'
import { FormField, FormItem } from './ui/form'
import FormLabel from './ui/form/FormLabel.vue'
import Input from './ui/input/Input.vue'

const props = defineProps<{
  name: string
  modelValue?: any
  type?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', payload: string): void
  (e: 'change', payload: string | number): void
}>()

const { value } = useField<string>(props.name)

watch(value, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>

<template>
  <FormField :name="name">
    <FormItem>
      <FormLabel>{{ name }}</FormLabel>
      <Input v-model="value" :type="type" class="!mt-1" @change="emit('change', $event)" />
      <FormMessage />
    </FormItem>
  </FormField>
</template>
