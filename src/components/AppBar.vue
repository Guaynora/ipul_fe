<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBell, faCog } from '@fortawesome/free-solid-svg-icons'

defineProps<{
  title: string
}>()
</script>

<template>
  <header class="bg-white shadow-sm w-full">
    <div class="flex items-center justify-between p-4">
      <h2 class="text-xl font-semibold text-gray-800">{{ title }}</h2>
      <div class="flex items-center space-x-3">
        <button aria-label="Notificaciones" class="text-gray-500 hover:text-gray-700">
          <FontAwesomeIcon :icon="faBell" />
        </button>
        <button aria-label="Configuración" class="text-gray-500 hover:text-gray-700">
          <FontAwesomeIcon :icon="faCog" />
        </button>
      </div>
    </div>
  </header>
</template>
