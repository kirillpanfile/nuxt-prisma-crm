<script lang="ts" setup>
import { Check, Moon, Sun } from 'lucide-vue-next'
import { Button } from '~crm/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~crm/components/ui/dropdown-menu'
import useColorMode from '~crm/hooks/useColorMode'
import { cn } from '~crm/lib/utils'

const { colorMode } = useColorMode()
</script>

<template>
  <DropdownMenu :modal="false">
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" size="icon" class="scale-95 rounded-full">
        <Sun class="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon class="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="colorMode = 'light'">
        Light
        <Check width="14" height="14" :class="cn('ml-auto', colorMode !== 'light' && 'hidden')" />
      </DropdownMenuItem>
      <DropdownMenuItem @click="colorMode = 'dark'">
        Dark
        <Check width="14" height="14" :class="cn('ml-auto', colorMode !== 'dark' && 'hidden')" />
      </DropdownMenuItem>
      <DropdownMenuItem @click="colorMode = 'auto'">
        System
        <Check width="14" height="14" :class="cn('ml-auto', colorMode !== 'auto' && 'hidden')" />
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
