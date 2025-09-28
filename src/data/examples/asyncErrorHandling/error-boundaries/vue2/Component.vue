<template>
  <div v-if="hasError" class="error-boundary">
    <h2>Something went wrong</h2>
    <p>{{ errorMessage }}</p>
    <button @click="retry">Try Again</button>
  </div>
  <slot v-else />
</template>

<script>
export default {
  data() {
    return {
      hasError: false,
      errorMessage: "",
    };
  },
  methods: {
    retry() {
      this.hasError = false;
      this.errorMessage = "";
    },
  },
  errorCaptured(err, vm, info) {
    this.hasError = true;
    this.errorMessage = err.message;
    console.error("Error captured:", err, info);
    // Send to error reporting service
    return false; // Prevent error from propagating
  },
};
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
