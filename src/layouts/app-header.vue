<template>
  <!-- Header Wrapper-->
  <nav class="header">
    <!-- Header  -->
    <div class="header-container relative flex w-full">
      <div class="flex w-full items-center justify-between">
        <!-- Left: Sidebar Toggle Button -->
        <div class="flex">
          <component :is="ComponentToggleSidebar" class="pr-2" />
          <p class="font-semibold uppercase"></p>
        </div>

        <!-- Right: Header Buttons -->
        <div>
          <component :is="ComponentDarkMode" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import ComponentDarkMode from './component-dark-mode.vue'
import ComponentToggleSidebar from './component-toggle-sidebar.vue'
</script>
