<script setup lang="ts">
import { Icon } from '#components'
import { defineAsyncComponent } from 'vue'
import { usePageMetadata } from '../../hooks/usePageMetadata'

const { nuxtPrismaAdmin } = usePageMetadata()
const Separator = defineAsyncComponent(() => import('../../components/ui/separator/Separator.vue'))

interface SidebarItem {
  title: string
  href: string
  icon: string
  badge?: number
  separator?: 'top' | 'bottom'
  children?: Array<Omit<SidebarItem, 'children'>>
}

const sidebarItems: Array<SidebarItem> = [
  { title: 'Dashboard', href: '/', icon: 'uil:home-alt', separator: 'bottom' },
  ...nuxtPrismaAdmin.apps,
]
</script>

<template>
  <aside class="flex flex-col h-full max-h-screen gap-2">
    <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
      <a href="/" class="flex items-center gap-2 font-semibold">
        <span class="">{{ nuxtPrismaAdmin.appName }}</span>
      </a>
    </div>
    <div class="flex-1">
      <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
        <template
          v-for="item in sidebarItems"
          :key="item.title"
        >
          <separator v-if="item.separator === 'top'" class="my-2" />

          <nuxt-link
            :to="item.href"
            active-class="router-link-active"
            class="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
          >
            <icon :name="item.icon" class="w-5 h-5" />
            {{ item.title }}
          </nuxt-link>
          <separator v-if="item.separator === 'bottom'" class="my-2" />
        </template>
      </nav>
    </div>
  </aside>
</template>

<style scoped>
.router-link-active {
  color: hsl(var(--primary));
  background-color: hsl(var(--primary) / 10%);
}
</style>
