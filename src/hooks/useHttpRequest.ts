type RequestParameters = Parameters<typeof $fetch>

export default async function useHttpRequest<T = unknown>(path: RequestParameters[0], options: RequestParameters[1] = {}) {
  const token = useCookie('token')
  const { locale } = useI18n()

  return await $fetch<T>(path, {
    ...options,
    headers: {
      'Accept-Language': locale.value,
      ...(token.value && { Token: token.value as string }),
      ...options?.headers,
    },
  })
}
