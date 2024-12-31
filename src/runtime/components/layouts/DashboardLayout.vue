<script setup lang="ts">
import {
  DashboardBreadcrumbs,
  SidebarMobileSidebar,
  UiButtonBaseButton,
  UiDropdownMenu,
  UiDropdownMenuItem,
  UiDropdownMenuLabel,
  UiDropdownMenuSeparator,
  UiDropdownMenuTrigger,
} from '#components'

import { CircleUser } from 'lucide-vue-next'
</script>

<template>
  <div class="grid min-h-screen w-full lg:grid-cols-[220px_1fr] ">
    <div class="hidden border-r bg-muted/40 lg:block">
      <sidebar-desktop-sidebar />
    </div>
    <div class="flex flex-col">
      <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <sidebar-mobile-sidebar />
        <ui-dropdown-menu>
          <ui-dropdown-menu-trigger as-child>
            <ui-button-base-button variant="secondary" size="icon" class="ml-auto rounded-full">
              <circle-user class="w-5 h-5" />
              <span class="sr-only">Toggle user menu</span>
            </ui-button-base-button>
          </ui-dropdown-menu-trigger>
          <ui-dropdown-menu-content align="end">
            <ui-dropdown-menu-label>My Account</ui-dropdown-menu-label>
            <ui-dropdown-menu-separator />
            <ui-dropdown-menu-item>Settings</ui-dropdown-menu-item>
            <ui-dropdown-menu-item>Support</ui-dropdown-menu-item>
            <ui-dropdown-menu-separator />
            <ui-dropdown-menu-item>Logout</ui-dropdown-menu-item>
          </ui-dropdown-menu-content>
        </ui-dropdown-menu>
      </header>
      <main class="flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6 lg:max-w-[calc(100vw-24px)] max-w-[calc(100vw-16px)]">
        <dashboard-breadcrumbs />
        <slot />
      </main>
    </div>
  </div>
</template>
