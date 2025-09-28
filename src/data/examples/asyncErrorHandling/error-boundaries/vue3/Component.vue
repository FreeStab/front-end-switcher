<template>
  <div v-if="hasError" class="error-boundary">
    <h2>Something went wrong</h2>
    <p>{{ errorMessage }}</p>
    <button @click="retry">Try Again</button>
  </div>
  <slot v-else />
</template>

<script setup>
import { ref, onErrorCaptured } from "vue";

const hasError = ref(false);
const errorMessage = ref("");

const retry = () => {
  hasError.value = false;
  errorMessage.value = "";
};

// Global error handler setup (usually in main.js)
// const app = createApp(App)
// app.config.errorHandler = (err, vm, info) => {
//   console.error('Global error:', err, info)
//   // Send to error reporting service
// }

onErrorCaptured((err) => {
  hasError.value = true;
  errorMessage.value = err.message;
  console.error("Error captured:", err);
  // Send to error reporting service
  return false; // Prevent error from propagating
});
</script>

<style>
.error-boundary {
  padding: 20px;
  border: 2px solid #ff4444;
  border-radius: 8px;
  background-color: #ffe6e6;
  color: #cc0000;
  text-align: center;
}
</style>
