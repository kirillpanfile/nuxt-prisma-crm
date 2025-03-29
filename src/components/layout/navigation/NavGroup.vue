<script lang="ts" setup>
import type { NavGroup, NavItem } from '.'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  useSidebar,

} from '~crm/components/ui/sidebar'
import SidebarMenuCollapsedDropdown from './SidebarMenuCollapsedDropdown.vue'
import SidebarMenuCollapsible from './SidebarMenuCollapsible.vue'
import SidebarMenuLink from './SidebarMenuLink.vue'

defineProps<NavGroup>()

const { state } = useSidebar()
const route = useRoute()
const href = computed(() => route.path)

function getComponent(item: NavItem) {
  if (!item.children)
    return SidebarMenuLink
  if (state.value === 'collapsed')
    return SidebarMenuCollapsedDropdown
  return SidebarMenuCollapsible
}
</script>

<template>
  <SidebarGroup>
    <SidebarGroupLabel>{{ title }}</SidebarGroupLabel>
    <SidebarMenu>
      <template v-for="(item) in items" :key="`${item.title}-${item.url}`">
        <component :is="getComponent(item)" :item="item" :href="href" />
      </template>
    </SidebarMenu>
  </SidebarGroup>
</template>

<style>

</style>
