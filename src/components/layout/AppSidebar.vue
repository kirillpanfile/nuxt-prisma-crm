<script lang="ts" setup>
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '~crm/components/ui/sidebar'
import { getSidebarData } from './data/sidebarData'
import NavGroup from './navigation/NavGroup.vue'
import NavUser from './navigation/NavUser.vue'
import TeamSwitcher from './navigation/TeamSwitcher.vue'

const sidebarData = getSidebarData()
</script>

<template>
  <Sidebar collapsible="icon" variant="floating">
    <SidebarHeader>
      <TeamSwitcher :teams="sidebarData.teams" />
    </SidebarHeader>
    <SidebarContent>
      <NavGroup v-for="item in sidebarData.navGroups" :key="item.title" v-bind="item" />
    </SidebarContent>
    <SidebarFooter>
      <NavUser :user="sidebarData.user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
