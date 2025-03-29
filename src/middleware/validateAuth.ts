import useAuthState from '../hooks/useAuthState'
import useHttpRequest from '../hooks/useHttpRequest'

export default async function () {
  const { isAdminUserAuth } = useAuthState()

  try {
    await useHttpRequest('/api/private/auth/validate', { cache: 'no-cache' })
    isAdminUserAuth.value = true
  }
  catch {
    isAdminUserAuth.value = false
    return await navigateTo('/private/admin/login')
  }
}
