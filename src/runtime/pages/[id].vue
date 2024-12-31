<script lang="ts" setup>
import DashboardDataTable from '../components/dashboard/DashboardDataTable.vue'
import DashboardPage from '../components/dashboard/DashboardPage.vue'
import CreateModal from '../components/ui/modal/CreateModal.vue'
import EditModal from '../components/ui/modal/EditModal.vue'
import { useEventDataRequests } from '../hooks/useEventDataRequests'
import { usePageMetadata } from '../hooks/usePageMetadata'

const { currentAppInstance } = usePageMetadata()
const { getBaseDatatable, deleteEntity } = useEventDataRequests()

useHead({
  title: currentAppInstance.value?.title,
})

const {
  data,
  suspense,
  dataUpdatedAt,
  refetch,
} = getBaseDatatable(currentAppInstance.value?.model as string)

const { mutateAsync: mutateDeleteItem } = deleteEntity(currentAppInstance.value?.model as string)

const serializeDataForTableRender = computed(() => {
  if (!currentAppInstance.value?.definition && !data.value && !Array.isArray(data.value)) {
    return []
  }

  const getItemValueFromDefinition = (key: string) => {
    return currentAppInstance.value?.definition[key]
  }

  if (!data.value && !data.value?.data?.length) {
    return []
  }

  return data.value?.data?.map((item: any) => {
    return Object.keys(item).reduce((acc, key) => {
      const data = getItemValueFromDefinition(key)
      if (!data?.hidden) {
        acc[key] = item[key]
      }
      return acc
    }, {})
  })
})

function deleteItem(payload: { id: number }) {
  mutateDeleteItem(payload?.id).then(() => {
    refetch()
  })
}

onServerPrefetch(async () => {
  await suspense()
})
</script>

<template>
  <lazy-layouts-dashboard-layout>
    <dashboard-page>
      <template #title>
        {{ currentAppInstance?.title }}
      </template>
      <div class="w-full">
        <dashboard-data-table
          :key="dataUpdatedAt"
          :total-count="data?.totalCount"
          :data="serializeDataForTableRender"
          @refresh="refetch"
          @delete="deleteItem"
        />
      </div>
    </dashboard-page>
    <create-modal />
    <edit-modal />
  </lazy-layouts-dashboard-layout>
</template>

<style>

</style>
