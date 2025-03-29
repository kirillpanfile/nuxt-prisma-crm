type RequestParameters = Parameters<typeof $fetch>

export default async function useHttpRequest<T = unknown>(path: RequestParameters[0], options: RequestParameters[1] = {}) {
  const token = useCookie('token')
  
  return $fetch<T>(path, {
    ...options,
    headers: {
      ...(token.value && { Token: token.value as string }),
      ...options?.headers,
    },
  })
}
