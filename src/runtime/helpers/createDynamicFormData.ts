import { ref } from 'vue'
import { usePageMetadata } from '../hooks/usePageMetadata'

const creationFiledExclude = Object.freeze([
  'id',
  'createdAt',
  'updatedAt',
])

type DynamicFormData = Record< string, {
  type: string
  value: string
  required: boolean
  key: string
}>

export function createDynamicFormData(populateData: any = ref({})): DynamicFormData {
  const { currentAppInstance } = usePageMetadata()

  if (!currentAppInstance.value?.definition) {
    console.error('No definition found')
    return {}
  }

  const initialData: [string, any][] = Object.entries(
    currentAppInstance.value?.definition,
  ).filter(
    ([key, value]) => !value?.hidden && !creationFiledExclude.includes(key),
  )
  const customValidations
    = currentAppInstance.value.pageContent.customValidations

  function asignCustomTypeByValidation(key: string, fallback: string): string {
    if (!customValidations) {
      return fallback
    }

    if (customValidations[key] && customValidations[key].includes('email')) {
      return 'email'
    }
    return fallback
  }

  const formDataArray = initialData.map(([key, value]) => ({
    [key]: {
      key,
      type: asignCustomTypeByValidation(key, value.type),
      value: populateData?.value ? populateData.value[key] : '',
      required: value.required,
    },
  }))

  return Object.assign({}, ...formDataArray)
}
