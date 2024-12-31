<script setup lang="ts">
import type { Row } from '@tanstack/vue-table'
import { FlexRender, getCoreRowModel, useVueTable } from '@tanstack/vue-table'
import { ref } from 'vue'
import { BaseButton } from '../../components/ui/button'
import {
  Select as BaseSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select'
import { Table as BaseTable, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'
import { getDynamicColumnDef } from '../../helpers/makeDataTableColumnDefs'
import { useModals } from '../../hooks/useModals'

const props = withDefaults(defineProps<{
  data: object[]
  totalCount: number
}>(), {
  data: () => [],
  totalCount: 0,
})

const emit = defineEmits<{
  (event: 'edit', payload: any): void
  (event: 'delete', payload: any): void
  (event: 'refresh'): void
}>()

const route = useRoute()
const router = useRouter()
const currentPage = ref(Number(route.query.page) || 1)
const { openModal } = useModals()

const columnDef = getDynamicColumnDef(props.data, {
  actions: {
    editRow: (row: Row<unknown>) => openModal('edit', row.original),
    deleteRow: (row: Row<unknown>) => {
      if (props.data.length === 1) {
        syncDataTableQuery(String(currentPage.value - 1))
      }
      emit('delete', row.original)
    },
  },
})

const table = useVueTable({
  data: props.data,
  columns: columnDef,
  getCoreRowModel: getCoreRowModel(),
})

const numberOfRows = computed({
  get: () => route.query.threshold as string,
  set: newVal => syncDataTableQuery('1', newVal).then(() => {
    emit('refresh')
  }),
})

const getCurrentPage = computed(() => {
  return (Number(numberOfRows.value) * (currentPage.value - 1)) + props.data.length
})

function syncDataTableQuery(page?: string, threshold?: string) {
  const queryPage = page ?? currentPage.value ?? 1
  const queryThreshold = threshold ?? numberOfRows.value ?? 25

  return router.replace({ query: { page: queryPage, threshold: queryThreshold } })
}

function goToPage(direction: 'next' | 'prev') {
  currentPage.value += 1 * (direction === 'next' ? -1 : 1)
  syncDataTableQuery().then(() => {
    emit('refresh')
  })
}

watch(route, () => syncDataTableQuery(), { immediate: true })
</script>

<template>
  <div class="flex items-center gap-2 py-4">
    <base-button
      variant="outline"
      @click="openModal('create')"
    >
      Create new item
    </base-button>
    <base-select v-model="numberOfRows">
      <select-trigger class="max-w-[200px] ml-auto" prefix="Number of Rows: ">
        <select-value placeholder="Number of rows" />
      </select-trigger>
      <select-content>
        <select-group>
          <select-item value="25">
            25
          </select-item>
          <select-item value="50">
            50
          </select-item>
          <select-item value="100">
            100
          </select-item>
        </select-group>
      </select-content>
    </base-select>
  </div>
  <div class="overflow-x-hidden border rounded-md">
    <base-table>
      <table-header>
        <table-row v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
          <table-head
            v-for="header in headerGroup.headers" :key="header.id" :data-pinned="header.column.getIsPinned()"
            :class="cn(
              { 'sticky bg-background/95': header.column.getIsPinned() },
              header.column.getIsPinned() === 'left' ? 'left-0' : 'right-0',
            )"
          >
            <flex-render v-if="!header.isPlaceholder" :render="header.column.columnDef.header" :props="header.getContext()" />
          </table-head>
        </table-row>
      </table-header>
      <table-body>
        <template v-if="table.getExpandedRowModel().rows?.length">
          <template v-for="row in table.getExpandedRowModel().rows" :key="row.id">
            <table-row :data-state="row.getIsSelected() && 'selected'">
              <table-cell
                v-for="cell in row.getVisibleCells()" :key="cell.id" :data-pinned="cell.column.getIsPinned()"
                :class="cn(
                  { 'sticky bg-background/95': cell.column.getIsPinned() },
                  cell.column.getIsPinned() === 'left' ? 'left-0' : 'right-0',
                )"
              >
                <template v-if="cell.getContext().getValue()">
                  {{ cell.getContext().getValue() }}
                </template>
                <flex-render v-else :render="cell.column.columnDef.cell" :props="cell.getContext()" />
              </table-cell>
            </table-row>
            <table-row v-if="row.getIsExpanded()">
              <table-cell :colspan="row.getAllCells()?.length">
                {{ row.original }}
              </table-cell>
            </table-row>
          </template>
        </template>
        <table-row v-else>
          <table-cell
            :colspan="getDynamicColumnDef?.length"
            class="h-24 text-center"
          >
            No results.
          </table-cell>
        </table-row>
      </table-body>
    </base-table>
  </div>

  <div class="flex items-center justify-end py-4 space-x-2">
    <div class="flex-1 text-sm text-muted-foreground">
      {{ getCurrentPage }} of {{ props.totalCount }} rows
    </div>
    <div class="space-x-2">
      <base-button
        variant="outline"
        size="sm"
        :disabled="currentPage <= 1"
        @click="goToPage('next')"
      >
        Previous
      </base-button>
      <base-button
        variant="outline"
        size="sm"
        :disabled="(Number(numberOfRows) * currentPage) >= props.totalCount"
        @click="goToPage('prev')"
      >
        Next
      </base-button>
    </div>
  </div>
</template>
