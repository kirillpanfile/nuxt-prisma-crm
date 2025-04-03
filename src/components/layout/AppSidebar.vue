<script lang="ts" setup>
import type { SidebarData } from './navigation'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '~crm/components/ui/sidebar'
import NavGroup from './navigation/NavGroup.vue'
import NavUser from './navigation/NavUser.vue'
import TeamSwitcher from './navigation/TeamSwitcher.vue'

const sidebarData = inject<SidebarData>('sidebarData')
</script>

<template>
  <Sidebar collapsible="icon" variant="floating">
    <SidebarHeader>
      <TeamSwitcher v-if="sidebarData?.teams" :teams="sidebarData?.teams" />
    </SidebarHeader>
    <SidebarContent>
      <NavGroup v-for="item in sidebarData?.navGroups" :key="item.title" v-bind="item" />
    </SidebarContent>
    <SidebarFooter>
      <NavUser v-if="sidebarData?.user" :user="sidebarData?.user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
