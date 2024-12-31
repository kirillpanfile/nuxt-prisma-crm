import type { ConfiguratorDefinition } from '../../types'

const fieldToMarkAsHidden = [
  'createdAt',
  'updatedAt',
  'deletedAt',
]

export function definitionSerializer(definition: ConfiguratorDefinition): any {
  if (definition.type !== 'object') {
    return {}
  }

  const getJStype = (type: string) => {
    if (type === 'integer') {
      return 'number'
    }
    return type
  }

  const properties = Object.entries(definition.properties)
  return properties.reduce((acc, [key, value]) => {
    acc[key] = {
      type: getJStype(value.type),
      required: definition.required?.includes(key) || false,
      hidden: fieldToMarkAsHidden.includes(key) || value.type === 'array',
    }
    return acc
  }, {})
}
