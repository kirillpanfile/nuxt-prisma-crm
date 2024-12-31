import { definitionSerializer } from '../src/runtime/helpers/definitionSerializer'
import JsonSchema from './prisma/prisma/schema.json/json-schema.json'

export default defineNuxtConfig({
  modules: ['../src/module.ts'],
  compatibilityDate: '2024-12-29',

  myModule: {
    appName: 'My App',
    appVersion: '1.0.0',
    appDescription: 'A simple app',
    apps: [
      {
        href: '/contact-form',
        title: 'Contact Form',
        icon: 'uil:users-alt',
        model: 'ContactForm',
        definition: definitionSerializer(JsonSchema.definitions.ContactForm),
        pageContent: {
          customValidations: {
            email: ['email'],
          },
          table: {
            render: true,
          },
        },
      },
      {
        model: 'Product',
        href: '/products',
        title: 'Products',
        definition: definitionSerializer(JsonSchema.definitions.Product),
        icon: 'uil:shopping-cart',
        pageContent: {
          table: {
            render: true,
          },
        },
      },
    ],
  },
})
