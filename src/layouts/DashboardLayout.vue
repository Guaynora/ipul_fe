<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const title = (route.meta.title as string) || 'Dashboard'
</script>

<template>
  <MainLayout :title="title">
    <router-view />
  </MainLayout>
</template>
