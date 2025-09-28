<template>
  <div>Component will cleanup on unmount</div>
</template>

<script setup>
import { onBeforeUnmount } from "vue";

onBeforeUnmount(() => {
  console.log("Component will unmount");
  // Cleanup logic here
});
</script>
