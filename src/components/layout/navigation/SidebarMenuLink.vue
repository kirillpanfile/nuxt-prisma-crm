<script lang="ts" setup>
import type { NavItem } from './index'
import { SidebarMenuButton, SidebarMenuItem, useSidebar } from '~crm/components/ui/sidebar'
import { checkIsActive } from './index'
import NavBadge from './NavBadge.vue'

defineProps<{
  item: NavItem
  href: string
}>()

const { setOpenMobile } = useSidebar()
</script>

<template>
  <SidebarMenuItem>
    <SidebarMenuButton
      as-child
      :is-active="checkIsActive(href, item)"
      :tooltip="item.title"
    >
      <NuxtLink :to="item.href" @click="() => setOpenMobile(false)">
        <component :is="item.icon" v-if="item.icon" />
        <span>{{ item.title }}</span>
        <NavBadge v-if="item.badge">
          {{ item.badge }}
        </NavBadge>
      </NuxtLink>
    </SidebarMenuButton>
  </SidebarMenuItem>
</template>

<style>

</style>
