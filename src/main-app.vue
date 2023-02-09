<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useDarkMode } from '@/composable/dark-mode'
import { useFontAwesome } from '@/composable/font-awesome'
import { useScreenSize } from '@/composable/screen-size'

const { init } = useDarkMode()
useFontAwesome()
useScreenSize()

init()
</script>
