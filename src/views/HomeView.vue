<script setup lang="ts">
import StatCard from '@/components/StatCard.vue'
import UserTable from '@/components/UserTable.vue'
import { usersList } from '@/const/user.const'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUsers, faUserPlus, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <section class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    <StatCard iconBgClass="bg-blue-100" iconTextClass="text-blue-600">
      <template #icon>
        <FontAwesomeIcon :icon="faUsers" class="fa-2x" />
      </template>
      <template #label> Total Feligreses </template>

      <template #value> 247 </template>
    </StatCard>
    <StatCard iconBgClass="bg-green-100" iconTextClass="text-green-600">
      <template #icon>
        <FontAwesomeIcon :icon="faUserPlus" class="fa-2x" />
      </template>
      <template #label> Nuevos este mes </template>

      <template #value> 12 </template>
    </StatCard>

    <StatCard iconBgClass="bg-purple-100" iconTextClass="text-purple-600">
      <template #icon>
        <FontAwesomeIcon :icon="faHandHoldingDollar" class="fa-2x" />
      </template>
      <template #label> Diezmadores Activos </template>

      <template #value> 12 </template>
    </StatCard>
  </section>
  <UserTable :users="usersList" />
</template>
