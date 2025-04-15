<script lang="ts" setup>
import { Pencil, Trash } from 'lucide-vue-next'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '~crm/components/ui/table'
import useHttpRequest from '../hooks/useHttpRequest'

enum AllowOnlyOneItem{
  PrivacyPolicy
}

import { usePageMetadata } from '../hooks/usePageMetadata'

const { currentAppInstance } = usePageMetadata()

const { data, suspense } = useQuery({
  queryKey: ['private.admin.get-model-data', currentAppInstance.value?.model],
  queryFn: async () => {
    return await useHttpRequest<Record<string, any>>('/api/private/model-data', {
      params: { model: currentAppInstance.value?.model },
    })
  },
})

const emit = defineEmits<{
  (e: 'checkLength', value: boolean) : void
}>()

onMounted(() => {
  suspense()

  if(typeof AllowOnlyOneItem[currentAppInstance.value.model] === 'number'){
    emit('checkLength', data.value.length > 0)
  }
})

const tableHeaders = computed(() => {
  if (!currentAppInstance.value?.definition) {
    return []
  }

  const dynamicHeaders = Object.keys(currentAppInstance.value.definition).reduce((acc, key) => {
    const data = currentAppInstance.value!.definition[key]
    if (!data.hidden) {
      const renderString = key.replace(/([A-Z])/g, ' $1').trim().replace(/\b\w/g, char => char.toUpperCase())
      // @ts-expect-error - this is a hack to get the type to work
      acc.push(renderString)
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
</script>

<template>
  <Table class="w-full overflow-hidden rounded-md" v-if="serializeDataForTableRender.length > 0">
    <TableHeader>
      <TableRow>
        <TableHead
          v-for="(header, index) in tableHeaders" :key="index"
          scope="col" class="py-3.5 bg-muted px-4 text-sm font-normal text-left rtl:text-right text-primary dark:text-white"
        >
          <button class="flex items-center gap-x-3 focus:outline-none">
            <span class="w-max whitespace-nowrap">{{ header }}</span>
          </button>
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody class="divide-y divide-border bg-background">
      <TableRow v-for="(item, index) in serializeDataForTableRender" :key="index">
        <td v-for="(value, key) in item" :key="key" class="px-4 py-4 text-sm font-medium whitespace-nowrap">
          {{ value }}
        </td>
        <td class="flex gap-1 px-4 py-4 text-sm font-medium whitespace-nowrap">
          <Button variant="ghost" size="icon">
            <Pencil />
          </Button>
          <Button variant="ghost" size="icon">
            <Trash />
          </Button>
        </td>
      </TableRow>
    </TableBody>
  </Table>

  <div v-else class="flex items-center justify-center w-full h-full py-24 my-auto mt-8 text-2xl font-bold rounded-lg bg-muted/50 outline-muted outline outline-2">Table is empty!</div>
</template>
