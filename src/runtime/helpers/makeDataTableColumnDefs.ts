import { type ColumnDef, createColumnHelper, type Row } from '@tanstack/vue-table'
import { useDatatable } from '../hooks/useDatatable'

interface GetDynamicColumnDefCustomOptions {
  actions?: {
    deleteRow?: (row: Row<unknown>) => void
    editRow?: (row: Row<unknown>) => void
  }
}

function functionExists(fn: any): fn is (...args: any[]) => void {
  return typeof fn === 'function'
}

export function getDynamicColumnDef(data: any, options?: GetDynamicColumnDefCustomOptions) {
  if (!data?.length)
    return []

  const { renderActionButton } = useDatatable()
  const columnHelper = createColumnHelper()

  const columns = []

  for (const key in data[0]) {
    columns.push(columnHelper.accessor(key, {
      id: key,
      enableHiding: true,
      header: key.charAt(0).toUpperCase() + key.slice(1),
      cell: ({ row }) => h('div', { class: 'capitalize' }, row.getValue(key)),
    }))
  }

  if (!options) {
    return columns as ColumnDef<unknown, any>[]
  }

  const { actions } = options

  if (actions && Object.keys(actions).length) {
    columns.push(columnHelper.display({
      id: 'actions',
      enableHiding: false,
      header: 'Actions',
      cell: ({ row }) => {
        const { deleteRow, editRow } = actions
        return h('div', { class: 'flex gap-2' }, [
          functionExists(editRow) && renderActionButton('Edit', () => editRow(row), 'default'),
          functionExists(deleteRow) && renderActionButton('Delete', () => deleteRow(row), 'destructive'),
        ])
      },
    }))
  }

  return columns as ColumnDef<unknown, any>[]
}
