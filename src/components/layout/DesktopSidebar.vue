<script setup lang="ts">
import { prismaCrmConfig } from '~~/shared/prismaCrmConfig'

interface SidebarItem {
  title: string
  href: string
  icon: string
  badge?: number
  separator?: 'top' | 'bottom'
  children?: Array<Omit<SidebarItem, 'children'>>
}

const sidebarItems: Array<SidebarItem> = [
  { title: 'Dashboard', href: '/private/admin', icon: 'uil:home-alt', separator: 'bottom' },
  ...prismaCrmConfig.apps,
]
</script>

<template>
  <aside class="flex flex-col h-full max-h-screen gap-2 bg-white">
    <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
      <a href="/" class="flex items-center gap-2 font-semibold">
        <span class="">{{ prismaCrmConfig.appName }}</span>
      </a>
    </div>
    <div class="flex-1">
      <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
        <template
          v-for="item in sidebarItems"
          :key="item.title"
        >
          <hr v-if="item.separator === 'top'" class="h-px my-2 bg-black/20">

          <nuxt-link
            :to="item.href"
            active-class="router-link-active"
            class="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
          >
            <!-- <icon :name="item.icon" class="w-5 h-5" /> -->
            {{ item.title }}
          </nuxt-link>
          <hr v-if="item.separator === 'bottom'" class="h-px my-2 bg-black/20">
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
