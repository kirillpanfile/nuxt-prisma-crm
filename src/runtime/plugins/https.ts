import { HttpClient } from '../helpers/httpClient'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      http: new HttpClient(),
    },
  }
})
