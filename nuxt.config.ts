import process from 'node:process'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  srcDir: 'src',
  modules: ['@nuxtjs/tailwindcss'],

  runtimeConfig: {
    jwtSecret: process.env.JWT_SECRET,
  },
})
