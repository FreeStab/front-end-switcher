<template>
  <div class="data-list">
    <div v-for="item in data" :key="item.id" class="item">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// This will trigger Suspense
const data = await fetch("/api/data").then((res) => {
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
});
</script>

<style scoped>
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
</style>
