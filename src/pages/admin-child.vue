<script lang="ts" setup>
import MaterialSymbolsDeleteForeverOutlineSharp from '~icons/material-symbols/delete-forever-outline-sharp'
import MaterialSymbolsEditSquareOutline from '~icons/material-symbols/edit-square-outline'
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
    return await useHttpRequest<Record<string, any>>('/api/private/get-clients', {
      params: { model: currentAppInstance.value?.model },
    })
  },
})

const tableHeaders = computed(() => {
  if (!currentAppInstance.value?.definition) {
    return []
  }

  return Object.keys(currentAppInstance.value.definition).reduce((acc, key) => {
    const data = currentAppInstance.value!.definition[key]
    if (!data.hidden) {
      // @ts-expect-error - this is a hack to get the type to work
      acc.push(key)
    }
    return acc
  }, []) as string[]
})

const serializeDataForTableRender = computed(() => {
  if (!currentAppInstance.value?.definition && !data.value && !Array.isArray(data.value)) {
    return []
  }

  const getItemValueFromDefinition = (key: string) => {
    return currentAppInstance.value?.definition[key]
  }

  if (!data.value || !Array.isArray(data.value)) {
    return []
  }

  return data.value?.map((item: any) => {
    return Object.keys(item).reduce((acc, key) => {
      const data = getItemValueFromDefinition(key)
      if (!data?.hidden) {
        // @ts-expect-error - this is a hack to get the type to work
        acc[key] = item[key]
      }
      return acc
    }, {})
  })
})

onServerPrefetch(async () => {
  await suspense()
})
</script>

<template>
  <div class="">
    <table class="w-full overflow-x-scroll border border-gray-200 shadow-md table-auto">
      <thead class="bg-gray-50">
        <tr>
          <th v-for="(header, index) in tableHeaders" :key="index" class="px-4 py-2 border border-gray-300">
            {{ header }}
          </th>
          <th class="px-4 py-2 border border-gray-300">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in serializeDataForTableRender" :key="index">
          <td v-for="(value, key) in item" :key="key" class="px-4 py-2 border">
            {{ value }}
          </td>
          <td colspan="100" class="px-4 py-2 border">
            <div class="flex items-center justify-center space-x-2">
              <material-symbols-delete-forever-outline-sharp class="w-6 h-6 cursor-pointer" />
              <material-symbols-edit-square-outline class="w-6 h-6 cursor-pointer" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>

</style>
