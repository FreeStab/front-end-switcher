<template>
  <div>
    <button @click="fetchData" :disabled="loading">
      {{ loading ? "Loading..." : "Fetch Data" }}
    </button>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="data">{{ data.message }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref(null);
const loading = ref(false);
const error = ref(null);

const fetchData = async () => {
  loading.value = true;
  error.value = null;

  try {
    const response = await fetch("/api/data");
    if (!response.ok) throw new Error("Failed to fetch");
    data.value = await response.json();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};
</script>
