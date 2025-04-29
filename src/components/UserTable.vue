<script setup lang="ts">
import UserTableHeader from './UserTableHeader.vue'
import UserTableRow from './UserTableRow.vue'

defineProps({
  users: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <table class="w-full bg-white shadow table-auto">
    <UserTableHeader />
    <tbody>
      <UserTableRow v-for="user in users" :key="user.email" :user="user" />
    </tbody>
  </table>
</template>
