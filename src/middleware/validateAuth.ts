import useAuthState from '../hooks/useAuthState'
import useHttpRequest from '../hooks/useHttpRequest'

export default defineNuxtRouteMiddleware(async () => {
  const { isAdminUserAuth } = useAuthState()

  try {
    await useHttpRequest('/api/private/auth/validate', { cache: 'no-cache' })
    isAdminUserAuth.value = true
  }
  catch {
    isAdminUserAuth.value = false
    return await navigateTo('/private/admin/auth/login')
  }
})
