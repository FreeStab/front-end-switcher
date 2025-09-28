<template>
  <div>
    <div>{{ count }}</div>
    <div>{{ doubleCount }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const count = ref(0);
const doubleCount = computed(() => count.value * 2);
</script>
