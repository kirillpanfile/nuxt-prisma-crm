export default function useAuthState() {
  const isAdminUserAuth = useState('private.admin.user.auth', () => false)
  const cookieToken = useCookie('token', {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  })

  return {
    isAdminUserAuth,
    cookieToken,
  }
}
