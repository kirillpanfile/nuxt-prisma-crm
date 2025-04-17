<script lang="ts" setup>
import type { SuperUser } from '@prisma/client'
import { AlertCircle } from 'lucide-vue-next'
import Alert from '~crm/components/ui/alert/Alert.vue'
import AlertDescription from '~crm/components/ui/alert/AlertDescription.vue'
import { Form, FormField, FormItem, FormLabel, FormMessage } from '~crm/components/ui/form'
import Button from '../ui/button/Button.vue'
import Input from '../ui/input/Input.vue'

defineProps<{
  error?: string
}>()

const emit = defineEmits<{
  (e: 'login'): void
}>()

const superUser = defineModel<Omit<SuperUser, 'id'>>('superUser', {
  required: true,
  default: () => ({
    email: '',
    password: '',
  }),
})
</script>

<template>
  <Form @submit="emit('login')">
    <div class="grid w-full gap-2 mt-2">
      <Alert v-if="error" variant="destructive">
        <div class="flex items-center gap-2">
          <AlertCircle class="w-4 h-4" />
          <AlertDescription>
            {{ error }}
          </AlertDescription>
        </div>
      </Alert>
      <FormField name="email">
        <FormItem>
          <FormLabel>
            Email
          </FormLabel>
          <Input v-model="superUser.email" required type="email" placeholder="Email" class="!mt-1" />
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField name="password">
        <FormItem>
          <FormLabel>
            Password
          </FormLabel>
          <Input v-model="superUser.password" required type="password" placeholder="Password" class="!mt-1" />
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit" class="w-full mt-2 cursor-pointer">
        Login
      </Button>
      <!-- <p class="px-8 mt-4 text-sm text-center text-muted-foreground">
        By clicking login, you agree to our
        <a
          href="/terms"
          class="underline underline-offset-4 hover:text-primary"
        >
          Terms of Service
        </a>
        and
        <a
          href="/privacy"
          class="underline underline-offset-4 hover:text-primary"
        >
          Privacy Policy
        </a>
        .
      </p> -->
    </div>
  </Form>
</template>
