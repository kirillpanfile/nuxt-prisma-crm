<script lang="ts" setup>
import { useQuery } from '#imports'
import { Pencil, Trash } from 'lucide-vue-next'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '~crm/components/ui/table'
import useHttpRequest from '../hooks/useHttpRequest'
import { usePageMetadata } from '../hooks/usePageMetadata'
import { useToast } from './ui/toast'

const { currentAppInstance } = usePageMetadata()
const queryClient = useQueryClient()
const { toast } = useToast()

const { data } = useQuery({
  queryKey: ['private.admin.get-model-data', currentAppInstance.value?.model],
  queryFn: async () => {
    return await useHttpRequest<Record<string, any>>('/api/private/model-data', {
      params: { model: currentAppInstance.value?.model },
    })
  },
})

const { mutateAsync: deleteItem } = useMutation({
  mutationFn: async (form: Record<string, number>) => {
    const modelToKebabCase = currentAppInstance.value?.model?.replace(/([A-Z])/g, ' $1').trim().replace(/\b\w/g, char => char.toLowerCase()).replace(/\s+/g, '-')
    return await useHttpRequest(`/api/delete/${modelToKebabCase}`, {
      method: 'DELETE',
      body: form,
    })
  },

  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['private.admin.get-model-data'] })
    toast({ title: 'Successfully deleted Privacy Policy', description: 'Page was created!' })
  },
  onError: (error: string) => {
    console.log(error)
    toast({ title: 'Something went wrong', variant: 'destructive', description: error })
  },
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

const router = useRouter()

function updateItem(){
  if(currentAppInstance.value.updateURL){
    router.push({path: currentAppInstance.value.updateURL})
  }
  return
}

defineExpose({
  dataLength: computed(() => data.value?.length || 0),
})
</script>

<template>
  <Table v-if="serializeDataForTableRender.length > 0" class="w-full overflow-hidden rounded-md">
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
          <Button variant="ghost" size="icon" class="cursor-pointer" @click="updateItem()">
            <Pencil />
          </Button>
          <Button variant="ghost" size="icon" class="cursor-pointer" @click="deleteItem(item)">
            <Trash />
          </Button>
        </td>
      </TableRow>
    </TableBody>
  </Table>

  <div v-else class="flex items-center justify-center w-full h-full py-24 my-auto mt-8 text-2xl font-bold rounded-lg bg-muted/50 outline-muted outline-2">
    Table is empty!
  </div>
</template>
