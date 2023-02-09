<template>
  <button @click="toggleSidebar()">
    <div v-if="!sidebarStore.isSidebarOpen">
      <fa-icon icon="fa-solid fa-bars w-5 h-5"></fa-icon>
    </div>
  </button>
</template>

<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'

const sidebarStore = useSidebarStore()

const toggleSidebar = () => {
  sidebarStore.toggleSidebar()
}
</script>
