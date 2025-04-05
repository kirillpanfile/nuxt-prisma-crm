import { useCookie, useNuxtApp } from '#imports'

type RequestParameters = Parameters<typeof $fetch>

export default async function useHttpRequest<T = unknown>(path: RequestParameters[0], options: RequestParameters[1] = {}) {
  const token = useCookie('token')
  const nuxtApp = useNuxtApp()

  return $fetch<T>(path, {
    ...options,
    headers: {
      ...(token.value && { Token: token.value as string }),
      ...(nuxtApp && nuxtApp.$i18n?.locale && { 'Accept-Language': nuxtApp.$i18n?.locale?.value }),
      ...options?.headers,
    },
  })
}
