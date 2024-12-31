import { HttpClient } from './helpers/httpClient'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      nuxtPrismaAdminHttp: new HttpClient(),
    },
  }
})
