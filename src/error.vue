<script lang="ts" setup>
import useColorMode from './hooks/useColorMode'

const error = useError()
const router = useRouter()
const { syncColorMode } = useColorMode()

const isNotFound = computed(() => error?.value?.statusCode === 404)

syncColorMode()
</script>

<template>
  <div class="flex flex-col items-center justify-center w-full h-auto gap-2 m-auto min-h-svh">
    <h1 class="text-[7rem] font-bold leading-tight">
      {{ error?.statusCode }}
    </h1>
    <span class="font-medium">Oops! Page Not Found!</span>
    <p class="text-center text-muted-foreground">
      It seems like the page you're looking for <br>
      does not exist or might have been removed.
    </p>
    <div class="flex gap-4 mt-6">
      <Button v-if="!isNotFound" variant="outline" @click="router.go(-1)">
        Go Back
      </Button>
      <Button @click="navigateTo('/private/admin')">
        Back to Home
      </Button>
    </div>
  </div>
</template>
