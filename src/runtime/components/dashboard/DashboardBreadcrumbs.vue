<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Breadcrumb, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '../../components/ui/breadcrumb'
import { usePageMetadata } from '../../hooks/usePageMetadata'

const route = useRoute()
const { nuxtPrismaAdmin } = usePageMetadata()

const breadcrumbs = computed(() => {
  const app = nuxtPrismaAdmin.apps.find(app => app.href.includes((route.params as any).id))
  return [
    { text: 'Dashboard', href: '/' },
    ...(app ? [{ text: app.title, href: app.href }] : []),
  ]
})

const isLastItem = (index: number) => index === breadcrumbs.value.length - 1
</script>

<template>
  <breadcrumb>
    <breadcrumb-list>
      <template v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <breadcrumb-link :href="breadcrumb.href">
          {{ breadcrumb.text }}
        </breadcrumb-link>
        <breadcrumb-separator v-if="!isLastItem(index)" />
      </template>
    </breadcrumb-list>
  </breadcrumb>
</template>
