import { capitalize } from 'vue'

export enum FieldType {
  Date = 'date',
  File = 'file',
  Select = 'select',
  Textarea = 'textarea',
  Text = 'text',
  Number = 'number',
  RichEditor = 'richEditor',
}

interface Options<T> {
  schema: {
    properties: {
      [key in keyof T]: {
        type: string
        required: boolean
      }
    }
    required?: string[]
  }
  fieldsToOmit?: Array<Partial<keyof T>> | Array<string>
  customFieldTypes?: {
    [key in keyof T]?: {
      type: FieldType
      options?: {
        label: string
        value: string
      }[]
    }
  }
}

export function getRootFormFields<T>({
  schema,
  fieldsToOmit = [],
  customFieldTypes = {},
}: Options<T>) {
  const form = ref<T>({} as T)
  const errors = ref<any>({})
  const formRef = ref<HTMLFormElement | null>(null)

  const typeMap = { integer: 'number', string: 'text' } as const

  const fields = Object.entries(schema.properties).filter(([key]) => !fieldsToOmit.includes(key as any)) as [keyof T, {
    type: string
    required?: boolean
  }][]

  const serializedFields = fields.map(([key, data]) => {
    const overideType = customFieldTypes[key]

    data.type = typeMap[data.type as keyof typeof typeMap] || data.type

    if (overideType) {
      data.type = overideType.type
    }

    return {
      key,
      data: {
        required: schema.required?.includes(key as string),
        label: capitalize((key as string).replace(/([A-Z])/g, ' $1').trim()).trim(),
        ...(overideType?.options && { options: overideType.options }),
        ...data,
      },
      handleChange: (key: string, type: string, value: any) => {
        if (type === 'file') {
          form.value[key as keyof T] = value
        }
      },
    }
  })

  const resetForm = () => nextTick(() => {
    formRef.value?.reset()
  })

  return {
    formRef,
    resetForm,
    serializedFields,
    form,
    errors,
  }
}
