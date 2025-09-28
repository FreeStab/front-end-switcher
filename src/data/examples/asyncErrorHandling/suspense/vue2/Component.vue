<template>
  <div>
    <!-- Loading State -->
    <div v-if="loading" class="loading-spinner">
      <div class="spinner"></div>
      <p>Loading data...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="error-message">
      <p>Error: {{ error.message }}</p>
      <button @click="fetchData">Retry</button>
    </div>

    <!-- Success State -->
    <div v-else class="data-list">
      <div v-for="item in data" :key="item.id" class="item">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuspenseComponent",
  data() {
    return {
      data: [],
      loading: true,
      error: null,
    };
  },

  async mounted() {
    await this.fetchData();
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
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
}

.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.data-list {
  padding: 20px;
}

.item {
  margin-bottom: 16px;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

.item h3 {
  margin: 0 0 8px 0;
  color: #333;
}

.item p {
  margin: 0;
  color: #666;
}

.error-message {
  text-align: center;
  padding: 40px;
  color: #cc0000;
}

.error-message button {
  margin-top: 16px;
  padding: 8px 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
