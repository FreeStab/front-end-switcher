<script setup>
import { ref, computed } from "vue";
import FrameworkSelector from "./components/FrameworkSelector.vue";
import Sidebar from "./components/Sidebar.vue";
import CodeViewer from "./components/CodeViewer.vue";
import { frameworks, categories } from "./data/index.js";

const selectedFrameworks = ref(["vue3", "react", "svelte5"]);
const selectedExample = ref("declare-state");

const selectedFrameworksData = computed(() =>
  frameworks.filter((fw) => selectedFrameworks.value.includes(fw.id))
);
</script>

<template>
  <div class="app">
    <header class="header">
      <h1 class="title">Frontend Framework Syntax Comparator</h1>
      <FrameworkSelector
        :frameworks="frameworks"
        :selected="selectedFrameworks"
        @update:selected="selectedFrameworks = $event"
      />
    </header>

    <main class="main">
      <Sidebar
        :categories="categories"
        :selected="selectedExample"
        @update:selected="selectedExample = $event"
      />

      <CodeViewer :frameworks="selectedFrameworksData" :example="selectedExample" />
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 10;
}

.title {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
}

.main {
  flex: 1;
  display: flex;
  background: #f9fafb;
}

@media (max-width: 768px) {
  .main {
    flex-direction: column;
  }

  .header {
    padding: 1rem;
  }

  .title {
    font-size: 1.25rem;
  }
}
</style>
