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
    return await useHttpRequest<Record<string, any>>('/api/private/model-data', {
      params: { model: currentAppInstance.value?.model },
    })
  },
})

const tableHeaders = computed(() => {
  if (!currentAppInstance.value?.definition) {
    return []
  }

  const dynamicHeaders = Object.keys(currentAppInstance.value.definition).reduce((acc, key) => {
    const data = currentAppInstance.value!.definition[key]
    if (!data.hidden) {
      // @ts-expect-error - this is a hack to get the type to work
      acc.push(key)
    }
    return acc
  }, []) as string[]

  return [
    ...dynamicHeaders,
    'Actions',
  ]
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
  <div class="min-w-full">
    <div class="overflow-scroll border border-gray-200 rounded-lg">
      <table class="min-w-full divide-y divide-gray-200 ">
        <thead class="bg-gray-50 ">
          <tr>
            <th
              v-for="(header, index) in tableHeaders" :key="index"
              scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 "
            >
              <button class="flex items-center gap-x-3 focus:outline-none">
                <span>{{ header }}</span>
              </button>
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="(item, index) in serializeDataForTableRender" :key="index">
            <td v-for="(value, key) in item" :key="key" class="px-4 py-4 text-sm font-medium whitespace-nowrap">
              {{ value }}
            </td>
            <td class="flex gap-4 px-4 py-4 text-sm font-medium whitespace-nowrap">
              <button class="text-indigo-600 hover:text-indigo-900">
                Edit
              </button>
              <button class="text-red-600 hover:text-red-900">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>

</style>
