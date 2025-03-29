<script lang="ts" setup>
import { Avatar, AvatarFallback, AvatarImage } from '~crm/components/ui/avatar'
import { Button } from '~crm/components/ui/button'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '~crm/components/ui/dropdown-menu'
import useAuthState from '~crm/hooks/useAuthState'

const { cookieToken, isAdminUserAuth } = useAuthState()

function logout() {
  cookieToken.value = null
  isAdminUserAuth.value = false
  navigateTo('/private/admin/login')
}
</script>

<template>
  <DropdownMenu :modal="false">
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="relative w-8 h-8 rounded-full">
        <Avatar class="w-8 h-8">
          <AvatarImage src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fprofile-avatar&psig=AOvVaw1MqeRVslciz37aZW3G_EuR&ust=1743167627862000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICo-8urqowDFQAAAAAdAAAAABAE" alt="@shadcn" />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56" align="end">
      <DropdownMenuLabel class="font-normal">
        <div class="flex flex-col space-y-1">
          <p class="text-sm font-medium leading-none">
            satnaing
          </p>
          <p class="text-xs leading-none text-muted-foreground">
            satnaingdev@gmail.com
          </p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem as-child>
          <NuxtLink to="/private/admin">
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </NuxtLink>
        </DropdownMenuItem>
        <DropdownMenuItem as-child>
          <NuxtLink to="/private/admin">
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </NuxtLink>
        </DropdownMenuItem>
        <DropdownMenuItem as-child>
          <NuxtLink to="/private/admin">
            private/admin
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </NuxtLink>
        </DropdownMenuItem>
        <DropdownMenuItem>New Team</DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem @click="logout()">
        Log out
        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
