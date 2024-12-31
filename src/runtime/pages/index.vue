<script setup lang="ts">
import { DashboardPage, LayoutsDashboardLayout } from '#components'

const { public: confing } = useRuntimeConfig()
</script>

<template>
  <layouts-dashboard-layout>
    <dashboard-page>
      <template #title>
        Dashboard
      </template>
      <div class="w-full" />

      <pre>
        {{ confing }}
      </pre>
    </dashboard-page>
  </layouts-dashboard-layout>
</template>
