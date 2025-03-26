type RequestParameters = Parameters<typeof $fetch>

export default async function useHttpRequest<T = unknown>(path: RequestParameters[0], options: RequestParameters[1] = {}) {
  const token = useCookie('token')
  const { $i18n } = useNuxtApp()
  return $fetch<T>(path, {
    ...options,
    headers: {
      'Accept-Language': $i18n.locale.value,
      ...(token.value && { Token: token.value as string }),
      ...options?.headers,
    },
  })
}
