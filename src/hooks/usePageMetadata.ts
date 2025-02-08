import { prismaCrmConfig } from '~shared/prismaCrmConfig'

export function usePageMetadata() {
  const { $router } = useNuxtApp()

  const pageId = computed(() => {
    return ($router.currentRoute.value?.params as any)?.id
  })

  const currentAppInstance = computed(() => {
    const app = prismaCrmConfig.apps.find(app => app.href.includes(pageId.value))
    if (!app) {
      return null
    }
    return app
  })

  return {
    pageId,
    currentAppInstance,
  }
}
