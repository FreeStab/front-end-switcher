<template>
  <div>
    <button @click="fetchData" :disabled="loading">
      {{ loading ? "Loading..." : "Fetch Data" }}
    </button>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="data">{{ data.message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      loading: false,
      error: null,
    };
  },
  methods: {
    async fetchData() {
      this.loading = true;
      this.error = null;

      try {
        const response = await fetch("/api/data");
        if (!response.ok) throw new Error("Failed to fetch");
        this.data = await response.json();
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
