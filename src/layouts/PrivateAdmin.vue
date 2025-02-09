<script lang="ts" setup>

</script>

<template>
  <div class="grid h-screen w-screen lg:grid-cols-[240px_1fr] !bg-[#fff] overflow-hidden fixed">
    <div class="hidden border-r bg-muted/40 lg:block">
      <layout-desktop-sidebar />
    </div>
    <div class="flex flex-col">
      <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <!-- <sidebar-mobile-sidebar /> -->
      </header>
      <main class="flex flex-col w-screen flex-1 h-full max-h-[calc(100dvh-60px)] gap-4 p-4 overflow-y-scroll lg:gap-6 lg:p-6 lg:w-[calc(100vw-240px)]">
        <!-- <dashboard-breadcrumbs /> -->
        <slot />
      </main>
    </div>
  </div>
</template>

<style>

</style>
