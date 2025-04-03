<script lang="ts" setup>
import AppSidebar from '~crm/components/layout/AppSidebar.vue'
import useColorMode from '~crm/hooks/useColorMode'
import { cn } from '~crm/lib/utils'
import SidebarProvider from '../components/ui/sidebar/SidebarProvider.vue'

const { syncColorMode } = useColorMode()

syncColorMode()
</script>

<template>
  <ClientOnly>
    <SidebarProvider>
      <AppSidebar />
      <div
        id="content"
        :class="cn(
          'ml-auto w-full max-w-full overflow-hidden h-full',
          'peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]',
          'peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]',
          'transition-[width] duration-200 ease-linear',
          'flex min-h-svh flex-col',
          'group-data-[scroll-locked=1]/body:h-full',
          'group-data-[scroll-locked=1]/body:has-[main.fixed-main]:h-svh',
        )"
      >
        <slot />
      </div>
    </SidebarProvider>
  </ClientOnly>
</template>

<style>

</style>
