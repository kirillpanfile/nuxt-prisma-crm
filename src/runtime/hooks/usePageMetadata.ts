import type { ModuleOptions } from '../../module'

export function usePageMetadata() {
  const { $router } = useNuxtApp()
  const { public: { nuxtPrismaAdmin } } = useRuntimeConfig()

  const pageId = computed(() => {
    return ($router.currentRoute.value?.params as any)?.id
  })

  const currentAppInstance = computed(() => {
    const app = (nuxtPrismaAdmin as ModuleOptions).apps.find(app => app.href.includes(pageId.value))
    if (!app) {
      return null
    }
    return app
  })

  return {
    pageId,
    currentAppInstance,
    nuxtPrismaAdmin: nuxtPrismaAdmin as ModuleOptions,
  }
}
