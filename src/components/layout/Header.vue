<script setup lang="ts">
import { Separator } from '~crm/components/ui/separator'
import { SidebarTrigger } from '~crm/components/ui/sidebar'
import { cn } from '~crm/lib/utils'

interface HeaderProps {
  fixed?: boolean
  class?: string
}

const props = defineProps<HeaderProps>()
const offset = ref(0)

const abortController = new AbortController()

function onScroll() {
  offset.value = document.body.scrollTop || document.documentElement.scrollTop
}

onMounted(() => {
  document.addEventListener('scroll', onScroll, { signal: abortController.signal })
})

onUnmounted(() => {
  abortController.abort()
})
</script>

<template>
  <header
    :class="cn(
      'flex h-16 items-center gap-3 bg-background p-4 sm:gap-4',
      fixed && 'header-fixed peer/header fixed z-50 w-[inherit] rounded-md',
      offset > 10 && fixed ? 'shadow' : 'shadow-none',
      props.class,
    )"
    v-bind="$attrs"
  >
    <SidebarTrigger variant="outline" class="scale-125 sm:scale-100" />
    <Separator orientation="vertical" class="h-6" />
    <slot />
  </header>
</template>
