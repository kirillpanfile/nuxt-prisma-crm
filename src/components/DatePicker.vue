<script setup lang="ts">
import type { DateValue } from '@internationalized/date'
import { DateFormatter, getLocalTimeZone } from '@internationalized/date'
import { CalendarIcon } from 'lucide-vue-next'
import { Button } from '~crm/components/ui/button'
import { Calendar } from '~crm/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '~crm/components/ui/popover'
import { cn } from '~crm/lib/utils'

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const value = defineModel<DateValue>()
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        :class="cn(
          'w-[280px] justify-start text-left font-normal',
          !value && 'text-muted-foreground',
        )"
      >
        <CalendarIcon class="w-4 h-4 mr-2" />
        {{ value ? df.format(value.toDate(getLocalTimeZone())) : "Pick a date" }}
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <Calendar v-model="value" initial-focus />
    </PopoverContent>
  </Popover>
</template>
