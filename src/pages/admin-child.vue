<script lang="ts" setup>
import useHttpRequest from '../hooks/useHttpRequest'
import { usePageMetadata } from '../hooks/usePageMetadata'

definePageMeta({
  path: '/private/admin/:id',
  layout: 'private-admin',
  middleware: 'validate-auth',
})

const { currentAppInstance } = usePageMetadata()

const { data, suspense } = useQuery({
  queryKey: ['private.admin.get-model-data', currentAppInstance.value?.model],
  queryFn: async () => {
    return await useHttpRequest('/api/private/get-clients', {
      params: { model: currentAppInstance.value?.model },
    })
  },
})

onServerPrefetch(async () => {
  await suspense()
})
</script>

<template>
  <pre>
{{ data }}
    </pre>
</template>

<style>

</style>
