import type { FullRequestParams } from '../helpers/httpClient'

export function useEventDataRequests() {
  const queryClient = useQueryClient()
  const route = useRoute()
  const { $nuxtPrismaAdminHttp } = useNuxtApp()

  const makeRequest = (params: Omit<FullRequestParams, 'path'>) => $nuxtPrismaAdminHttp.request({
    method: 'POST',
    path: '/api/event',
    ...params,
  })

  const getBaseDatatable = (model: string) =>
    useQuery({ queryKey: ['dashboard', model], queryFn: () => makeRequest({
      body: { modelName: model, action: 'get' },
      query: { page: route.query.page ?? 1, threshold: route.query.threshold ?? 25 },
    }).then(({ data }) => data), retry: 0 })

  const createNewEntity = (model: string) =>
    useMutation({
      mutationKey: ['create', model],
      mutationFn: (data: any) => makeRequest({ body: { modelName: model, action: 'create', data } }),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ['dashboard', model] }),
    })

  const deleteEntity = (model: string) =>
    useMutation({
      mutationKey: ['delete', model],
      mutationFn: (id: any) => makeRequest({ body: { modelName: model, action: 'delete', data: { id } } }),
    })

  const updateEntity = (model: string) =>
    useMutation({
      mutationKey: ['update', model],
      mutationFn: (entityData: { id: any, [key: string]: any }) => makeRequest({ body: { modelName: model, action: 'patch', data: entityData } }),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ['dashboard', model] }),
    })

  return {
    getBaseDatatable,
    createNewEntity,
    deleteEntity,
    updateEntity,
  }
}
