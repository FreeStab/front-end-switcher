<template>
  <div>
    <!-- Skeleton Loading -->
    <div v-if="loading" class="skeleton-container">
      <div v-for="i in 3" :key="i" class="skeleton-item">
        <div class="skeleton-avatar"></div>
        <div class="skeleton-content">
          <div class="skeleton-line skeleton-line-title"></div>
          <div class="skeleton-line skeleton-line-text"></div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div v-else-if="data" class="content">
      <div v-for="item in data" :key="item.id" class="item">
        <img :src="item.avatar" class="avatar" />
        <div class="content">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="error-state">
      <p>{{ error }}</p>
      <button @click="retry">Retry</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      loading: true,
      error: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      this.error = null;

      try {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
        const response = await fetch("/api/items");
        if (!response.ok) throw new Error("Failed to load");
        this.data = await response.json();
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
    retry() {
      this.fetchData();
    },
  },
};
</script>

<style scoped>
.skeleton-container {
  padding: 20px;
}

.skeleton-item {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 8px;
  background: #f5f5f5;
}

.skeleton-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(90deg, #e2e2e2 25%, #f0f0f0 50%, #e2e2e2 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  margin-right: 16px;
}

.skeleton-content {
  flex: 1;
}

.skeleton-line {
  height: 16px;
  background: linear-gradient(90deg, #e2e2e2 25%, #f0f0f0 50%, #e2e2e2 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 4px;
  margin-bottom: 8px;
}

.skeleton-line-title {
  height: 20px;
  width: 60%;
}

.skeleton-line-text {
  width: 80%;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.content .item {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 16px;
}

.error-state {
  text-align: center;
  padding: 40px;
  color: #cc0000;
}

.error-state button {
  margin-top: 16px;
  padding: 8px 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
