<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

import { ChevronRight } from 'lucide-vue-next'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <li
    role="presentation"
    aria-hidden="true"
    :class="cn('[&>svg]:size-3.5', props.class)"
  >
    <slot>
      <chevron-right />
    </slot>
  </li>
</template>
