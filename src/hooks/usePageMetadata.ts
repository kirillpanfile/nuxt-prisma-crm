export function usePageMetadata(overridePrismaCrmConfig?: any) {
  const prismaCrmConfig = overridePrismaCrmConfig || inject<any>('prismaCrmConfig')

  const { $router } = useNuxtApp()

  const pageSlug = computed(() => {
    return ($router.currentRoute.value?.params as any)?.slug
  })

  const currentAppInstance = computed(() => {
    const app = prismaCrmConfig.apps.find((app: any) => app.href.includes(pageSlug.value))
    if (!app) {
      return null
    }

    return app
  })

  const getDeleteProvider = async () => { 

    const findDeleteProvider = Object.prototype.hasOwnProperty.call(currentAppInstance.value?.providers ?? {}, 'getDeleteMethod')

    if(!findDeleteProvider){
      return () => {
        console.warn('Delete function Not Implemented!')
      }
    }

    return await currentAppInstance.value.providers.getDeleteMethod()
  }

  return {
    pageSlug,
    currentAppInstance,
    getDeleteProvider,
  }
}
