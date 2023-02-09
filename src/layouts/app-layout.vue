<template>
  <app-preloader class="print:hidden"></app-preloader>

  <!-- Page Wrapper -->
  <div class="h-100vh flex grow bg-white dark:bg-slate-800">
    <app-sidebar class="print:hidden"></app-sidebar>
    <app-header class="print:hidden"></app-header>
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppPreloader from '@/components/app-preloader.vue'
import AppSidebar from './app-sidebar.vue'
import AppHeader from './app-header.vue'
</script>
