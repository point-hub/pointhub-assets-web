<template>
  <span>
    <i :class="props.icon"></i>
  </span>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
})
</script>
