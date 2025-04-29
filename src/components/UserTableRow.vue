<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEdit, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { badgeClass } from '@/utils/badges'

defineProps({
  user: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <tr class="hover:bg-gray-50 border-b border-gray-200 text-left">
    <td class="px-4 py-3 w-1/6">{{ user.firstName }}</td>
    <td class="px-4 py-3 w-1/6">{{ user.lastName }}</td>
    <td class="px-4 py-3 w-1/5 text-sm">{{ user.email }}</td>
    <td class="px-4 py-3 w-1/6">{{ user.phone }}</td>
    <td class="px-4 py-3 w-1/6">
      <span :class="badgeClass(user.ministry)">
        {{ user.ministry }}
      </span>
    </td>
    <td class="px-4 py-3 w-1/6 flex space-x-2">
      <button class="text-blue-600 hover:text-blue-800">
        <FontAwesomeIcon :icon="faEdit" />
      </button>
      <button class="text-gray-500 hover:text-gray-700">
        <FontAwesomeIcon :icon="faEye" />
      </button>

      <button class="text-red-600 hover:text-red-800">
        <FontAwesomeIcon :icon="faTrashAlt" />
      </button>
    </td>
  </tr>
</template>
