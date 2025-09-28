<template>
  <div class="container">
    <p :class="{ active: isActive }" :style="styles">Styled content</p>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const isActive = ref(true);
const styles = reactive({
  color: "blue",
  fontSize: "16px",
});
</script>

<style scoped>
.container {
  padding: 20px;
}
.active {
  font-weight: bold;
}
</style>
