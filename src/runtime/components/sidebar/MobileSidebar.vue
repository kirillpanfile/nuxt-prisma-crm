<script setup lang="ts">
import { Sheet, SheetContent, SheetTrigger } from '../../components/ui/sheet'
import BaseButton from '../ui/button/BaseButton.vue'
import DesktopSidebar from './DesktopSidebar.vue'
</script>

<template>
  <sheet>
    <sheet-trigger as-child>
      <base-button
        variant="outline"
        size="icon"
        class="shrink-0 lg:hidden"
      >
        <menu class="w-5 h-5" />
        <span class="sr-only">Toggle navigation menu</span>
      </base-button>
    </sheet-trigger>
    <sheet-content side="left" class="flex flex-col p-0">
      <desktop-sidebar />
    </sheet-content>
  </sheet>
</template>
