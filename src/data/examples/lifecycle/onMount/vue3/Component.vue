<template>
  <div>{{ message }}</div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const message = ref("");

onMounted(() => {
  message.value = "Component mounted!";
  console.log("Component mounted");
});
</script>
