import type { definitionSerializer } from './runtime/helpers/definitionSerializer'

export interface ConfiguratorApp {
  title: string
  href: string
  icon: string
  model: string
  definition?: ReturnType<typeof definitionSerializer>
  pageContent: {
    customValidations?: Record<string, Array<'email'>>
    table?: {
      render: boolean
      columns?: Array<string>
      actions?: Array<'edit' | 'delete'>
    }
  }
  options?: {
    fields?: Array<string>
  }
}

export interface Configurator {
  appName: string
  appVersion: string
  appDescription: string
  apps: Array<{
    title: string
    href: string
    icon: string
    model: string
    definition?: ReturnType<typeof definitionSerializer>
    pageContent: {
      customValidations?: Record<string, Array<'email'>>
      table?: {
        render: boolean
        columns?: Array<string>
        actions?: Array<'edit' | 'delete'>
      }
    }
    options?: {
      fields?: Array<string>
    }
  }>
}

export interface ConfiguratorDefinition {
  type: string
  properties: Record<string, {
    type: string
    originalType: string
    format?: string
  }>
  required: Array<string>
}
