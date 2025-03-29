<script lang="ts" setup>
import type { NavCollapsible } from '.'
import { ChevronRight } from 'lucide-vue-next'
import { checkIsActive } from './index'
import NavBadge from './NavBadge.vue'

defineProps<{
  item: NavCollapsible
  href: string
}>()
</script>

<template>
  <SidebarMenuItem>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <SidebarMenuButton
          :tooltip="item.title"
          :is-active="checkIsActive(href, item)"
        >
          <component :is="item.icon" v-if="item.icon" />
          <span>{{ item.title }}</span>
          <NavBadge v-if="item.badge">
            {{ item.badge }}
          </NavBadge>
          <ChevronRight class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right" align="start" :side-offset="4">
        <DropdownMenuLabel>
          {{ item.title }} {{ item.badge ? `(${item.badge})` : '' }}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem v-for="sub in item.children" :key="`${sub.title}-${sub.href}`" as-child>
          <NuxtLink
            :to="sub.href"
            :class="checkIsActive(href, sub) ? 'bg-secondary' : ''"
          >
            <component :is="sub.icon" v-if="sub.icon" />
            <span class="max-w-52 text-wrap">{{ sub.title }}</span>
            <span v-if="sub.badge" class="ml-auto text-xs">
              {{ sub.badge }}
            </span>
          </NuxtLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </SidebarMenuItem>
</template>

<style>

</style>
