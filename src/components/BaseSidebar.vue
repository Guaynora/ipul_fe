<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faChurch,
  faUsers,
  faHandHoldingDollar,
  faMoneyBillTrendUp,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <aside class="relative bg-blue-800 w-64 h-screen flex flex-col">
    <nav class="flex-1">
      <div class="p-4 flex items-center border-b border-blue-700 text-white">
        <FontAwesomeIcon :icon="faChurch" class="mr-3 text-2xl" />
        <h1 class="text-xl font-bold">Finanzas IPUL24</h1>
      </div>
      <div>
        <div class="px-4 py-2 text-sm text-blue-200 uppercase">Administración</div>
        <ul>
          <RouterLink
            to="/about"
            class="flex items-center px-4 py-3 text-blue-100 hover:bg-blue-700"
          >
            <FontAwesomeIcon :icon="faUsers" class="mr-3" />
            <span>Feligreses</span>
          </RouterLink>
          <RouterLink
            to="/about"
            class="flex items-center px-4 py-3 text-blue-100 hover:bg-blue-700"
          >
            <FontAwesomeIcon :icon="faHandHoldingDollar" class="mr-3" />
            <span>Diezmos</span>
          </RouterLink>
          <RouterLink
            to="/about"
            class="flex items-center px-4 py-3 text-blue-100 hover:bg-blue-700"
          >
            <FontAwesomeIcon :icon="faMoneyBillTrendUp" class="mr-3" />
            <span>Ofrendas</span>
          </RouterLink>
        </ul>
      </div>
      <div>
        <div class="px-4 py-2 text-sm text-blue-200 uppercase">Finanzas</div>
        <ul>
          <RouterLink
            to="/about"
            class="flex items-center px-4 py-3 text-blue-100 hover:bg-blue-700"
          >
            <FontAwesomeIcon :icon="faMoneyBillTrendUp" class="mr-3" />
            <span>Ingresos</span>
          </RouterLink>

          <RouterLink
            to="/about"
            class="flex items-center px-4 py-3 text-blue-100 hover:bg-blue-700"
          >
            <FontAwesomeIcon :icon="faHandHoldingDollar" class="mr-3" />
            <span>Egresos</span>
          </RouterLink>

          <RouterLink
            to="/about"
            class="flex items-center px-4 py-3 text-blue-100 hover:bg-blue-700"
          >
            <FontAwesomeIcon :icon="faChartLine" class="mr-3" />
            <span>Reportes</span>
          </RouterLink>
        </ul>
      </div>
    </nav>
    <div class="p-4 border-t border-blue-700 text-white">
      <div>
        <div class="font-medium">User test</div>
        <div class="text-xs text-blue-200">Administrador</div>
      </div>
    </div>
  </aside>
</template>
