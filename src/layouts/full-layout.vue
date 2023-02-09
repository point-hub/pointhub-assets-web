<template>
  <app-preloader class="print:hidden"></app-preloader>

  <!-- Page Wrapper -->
  <div class="h-100vh flex grow bg-slate-50 dark:bg-slate-800">
    <main class="grid w-full grow grid-cols-1 place-items-center">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppPreloader from '@/components/app-preloader.vue'
</script>
