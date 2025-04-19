<script setup lang="ts">
defineProps<{
  iconBgClass?: string
  iconTextClass?: string
}>()
</script>

<template>
  <article class="bg-white rounded-lg shadow p-5">
    <header class="flex items-center">
      <div class="p-3 rounded-full" :class="[iconBgClass, iconTextClass]" aria-hidden="true">
        <slot name="icon" />
      </div>
      <div class="ml-4">
        <p class="text-sm text-gray-500">
          <slot name="label" />
        </p>
        <strong class="text-2xl font-semibold">
          <slot name="value" />
        </strong>
      </div>
    </header>
  </article>
</template>
