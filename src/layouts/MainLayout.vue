<script setup lang="ts">
import BaseSidebar from '@/components/BaseSidebar.vue'
import AppBar from '@/components/AppBar.vue'

defineProps<{
  title: string
}>()
</script>

<template>
  <div class="flex h-screen">
    <BaseSidebar />

    <div class="flex flex-col flex-1 overflow-hidden">
      <AppBar :title="title" />
      <main class="flex-1 overflow-y-auto p-6 bg-gray-50">
        <slot />
      </main>
    </div>
  </div>
</template>
