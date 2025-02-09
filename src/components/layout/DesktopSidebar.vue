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
  ...prismaCrmConfig.apps,
]
</script>

<template>
  <aside class="flex flex-col h-screen px-5 py-8 overflow-y-auto bg-[#fff]">
    <nuxt-link to="/private/admin" class="pr-4">
      <Icon name="local:logo" class="w-full h-full" width="134" />
    </nuxt-link>

    <div class="flex flex-col justify-between flex-1 mt-6">
      <nav class="-mx-3 space-y-6 ">
        <div class="space-y-3 ">
          <label class="px-3 text-xs text-gray-500 uppercase ">analytics</label>
          <nuxt-link to="/private/admin" class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700" href="#">
            <Icon name="uil:home-alt" class="w-5 h-5" />
            <span class="mx-2 text-sm font-medium">Dashboard</span>
          </nuxt-link>
        </div>

        <div class="space-y-3 ">
          <label class="px-3 text-xs text-gray-500 uppercase ">content</label>

          <nuxt-link
            v-for="item in sidebarItems"
            :key="item.title"
            :to="item.href"
            class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700"
          >
            <Icon :name="item.icon" class="w-5 h-5" />
            <span class="mx-2 text-sm font-medium">
              {{ item.title }}
            </span>
          </nuxt-link>
        </div>
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
