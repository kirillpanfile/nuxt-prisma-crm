<script lang="ts" setup>
import { Menu } from 'lucide-vue-next'
import { Button } from '~crm/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~crm/components/ui/dropdown-menu'
import { cn } from '~crm/lib/utils'

interface TopNavProps {
  links: {
    title: string
    href: string
    isActive: boolean
    disabled?: boolean
  }[]
  class?: string
}

const props = defineProps<TopNavProps>()
</script>

<template>
  <div class="md:hidden">
    <DropdownMenu :modal="false">
      <DropdownMenuTrigger as-child>
        <Button size="icon" variant="outline">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="start">
        <DropdownMenuItem v-for="{ title, href, isActive, disabled } in links" :key="`${title}-${href}`" as-child>
          <NuxtLink
            :to="href"
            :class="!isActive ? 'text-muted-foreground' : ''"
            :disabled="disabled"
          >
            {{ title }}
          </NuxtLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>

  <nav
    :class="cn('hidden items-center space-x-4 md:flex lg:space-x-6', props.class)"
    v-bind="$attrs"
  >
    <NuxtLink
      v-for="{ title, href, isActive, disabled } in links"
      :key="`${title}-${href}`"
      :to="href"
      :disabled="disabled"
      :class="`text-sm font-medium transition-colors hover:text-primary ${isActive ? '' : 'text-muted-foreground'}`"
    >
      {{ title }}
    </NuxtLink>
  </nav>
</template>

<style>

</style>
