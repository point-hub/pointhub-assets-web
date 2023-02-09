<template>
  <button class="text-black" @click="toggleDarkMode()">
    <fa-icon v-if="isDark" icon="fa-solid fa-sun-bright w-6 h-6" class="text-yellow-100" />
    <fa-icon v-else icon="fa-solid fa-moon w-6 h-6" class="text-slate-600" />
  </button>
</template>

<script setup lang="ts">
import { isDark, useDarkMode } from '@/composable/dark-mode'

const { toggleDarkMode } = useDarkMode()
</script>
