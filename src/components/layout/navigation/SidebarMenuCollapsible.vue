<script lang="ts" setup>
import type { NavCollapsible } from '.'
import { ChevronRight } from 'lucide-vue-next'
import Collapsible from '~crm/components/ui/collapsible/Collapsible.vue'
import CollapsibleContent from '~crm/components/ui/collapsible/CollapsibleContent.vue'
import CollapsibleTrigger from '~crm/components/ui/collapsible/CollapsibleTrigger.vue'
import { useSidebar } from '~crm/components/ui/sidebar'
import SidebarMenuSub from '~crm/components/ui/sidebar/SidebarMenuSub.vue'
import { checkIsActive } from './index'
import NavBadge from './NavBadge.vue'

defineProps<{
  item: NavCollapsible
  href: string
}>()

const { setOpenMobile } = useSidebar()
</script>

<template>
  <Collapsible
    as-child
    :default-open="checkIsActive(href, item, true)"
    class="group/collapsible"
  >
    <SidebarMenuItem>
      <CollapsibleTrigger as-child>
        <SidebarMenuButton :tooltip="item.title">
          <component :is="item.icon" v-if="item.icon" />
          <span>{{ item.title }}</span>
          <NavBadge v-if="item.badge">
            {{ item.badge }}
          </NavBadge>
          <ChevronRight class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
        </SidebarMenuButton>
      </CollapsibleTrigger>
      <CollapsibleContent class="CollapsibleContent">
        <SidebarMenuSub>
          <SidebarMenuSubItem v-for="subItem in item.children" :key="subItem.title">
            <SidebarMenuSubButton
              as-child
              :is-active="checkIsActive(href, subItem)"
            >
              <NuxtLink :to="subItem.href" @click="() => setOpenMobile(false)">
                <component :is="subItem.icon" v-if="subItem.icon" />
                <span>{{ subItem.title }}</span>
                <NavBadge v-if="subItem.badge">
                  {{ subItem.badge }}
                </NavBadge>
              </NuxtLink>
            </SidebarMenuSubButton>
          </SidebarMenuSubItem>
        </SidebarMenuSub>
      </CollapsibleContent>
    </SidebarMenuItem>
  </Collapsible>
</template>

<style>

</style>
