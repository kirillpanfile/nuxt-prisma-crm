<script lang="ts" setup>
import Button from './components/ui/button/Button.vue'
import useColorMode from './hooks/useColorMode'

const error = useError()
const { syncColorMode } = useColorMode()

syncColorMode()
</script>

<template>
  <div class="flex flex-col items-center justify-center w-full h-auto gap-2 m-auto min-h-svh">
    <h1 class="font-bold leading-tight text-[7rem]">
      {{ error?.statusCode }}
    </h1>
    <span class="font-medium">Oops! Page Not Found!</span>
    <p class="max-w-4xl text-center text-muted-foreground">
      {{ error?.message }}
    </p>
    <div class="flex gap-4 mt-6">
      <Button @click="$router.push('/private/admin')">
        Back to Home
      </Button>
    </div>
  </div>
</template>
