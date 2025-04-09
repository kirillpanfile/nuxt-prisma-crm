import { capitalize } from 'vue'

export enum FieldType {
  Date = 'date',
  File = 'file',
  Select = 'select',
  Textarea = 'textarea',
  Text = 'text',
  Number = 'number',
  RichEditor = 'richEditor'
}

interface Options {
  schema: Record<string, string>
  fieldsToOmit?: string[]
  customFieldTypes?: Record<string, any>
}

export function getRootFormFields<T>({
  schema = {},
  fieldsToOmit = [],
  customFieldTypes = {},
}: Options) {
  const form = ref<T>({} as T)
  const errors = ref<any>({})
  const formRef = ref<HTMLFormElement | null>(null)

  const typeMap = { integer: 'number', string: 'text' } as const
  const fields = Object.entries(schema.properties).filter(([key]) => !fieldsToOmit.includes(key))

  const serializedFields = fields.map(([key, data]: [string, any]) => {
    const overideType = customFieldTypes[key as keyof typeof customFieldTypes]

    data.type = typeMap[data.type as keyof typeof typeMap] || data.type

    if (overideType) {
      data.type = overideType.type
    }

    return {
      key,
      data: {
        required: schema.required.includes(key),
        label: capitalize(key.replace(/([A-Z])/g, ' $1').trim()).trim(),
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
