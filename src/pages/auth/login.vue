<script lang="ts" setup>
import type { SuperUser } from '@prisma/client'
import type { DefaultServerError } from '~crm/src/server/types'
import useAuthState from '~crm/src/hooks/useAuthState'
import useHttpRequest from '~crm/src/hooks/useHttpRequest'

interface LoginResponse {
  token: number
}

definePageMeta({
  path: '/private/admin/auth/login',
  layout: false,
})

const { isAdminUserAuth, cookieToken } = useAuthState()

const superUser = shallowReactive<Omit<SuperUser, 'id'>>({
  email: '',
  password: '',
})

const { mutateAsync, error } = useMutation<LoginResponse, DefaultServerError>({
  mutationKey: ['private.admin.auth.login'],
  mutationFn: async () => {
    const response = await useHttpRequest('/api/private/auth/login', { method: 'POST', body: superUser })
    return response
  },
  onSuccess: (response) => {
    isAdminUserAuth.value = true
    cookieToken.value = String(response.token)
    navigateTo('/private/admin')
  },
})
</script>

<template>
  <div class="flex items-center justify-center w-full h-screen max-w-sm p-4 mx-auto">
    <form class="flex flex-col w-full gap-1" @submit.prevent="mutateAsync()">
      <div v-if="error && error?.data" class="p-2 mb-2 text-white bg-red-500 rounded">
        {{ error!.data.message }}
      </div>
      <h1 class="mt-2 text-2xl font-bold text-white">
        Login
      </h1>
      <input v-model="superUser.email" class="p-1" required type="email" placeholder="Email">
      <input v-model="superUser.password" class="p-1" required type="password" placeholder="Password">
      <button type="submit" class="p-2 text-white bg-blue-500 rounded">
        Login
      </button>
    </form>
  </div>
</template>
