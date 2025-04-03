<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~crm/components/ui/select'

withDefaults(defineProps<{
  options?: {
    label: string
    value: string
  }[]
}>(), {
  options: () => [],
})
</script>

<template>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Select a option" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup v-for="option in options" :key="option.value">
        <SelectItem :value="option.value">
          {{ option.label }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
