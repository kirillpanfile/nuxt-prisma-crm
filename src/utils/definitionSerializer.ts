import type { ConfiguratorDefinition } from '../types'

const fieldToMarkAsHidden = [
  'createdAt',
  'updatedAt',
  'deletedAt',
]

export function definitionSerializer(definition: ConfiguratorDefinition, customFields: string[] = []): any {
  if (definition.type !== 'object') {
    return {}
  }

  const getJStype = (type: string) => {
    if (type === 'integer') {
      return 'number'
    }
    return type
  }

  const properties = Object.entries(definition.properties).filter(([key]) => !customFields.includes(key))

  return properties.reduce((acc, [key, value]) => {
    // @ts-expect-error - hidden is not defined
    acc[key] = {
      type: getJStype(value.type),
      required: definition.required?.includes(key) || false,
      hidden: fieldToMarkAsHidden.includes(key) || value.type === 'array',
    }
    return acc
  }, {})
}
