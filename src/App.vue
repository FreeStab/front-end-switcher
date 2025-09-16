<script setup>
import { ref, computed } from "vue";
import FrameworkSelector from "./components/FrameworkSelector.vue";
import Sidebar from "./components/Sidebar.vue";
import CodeViewer from "./components/CodeViewer.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
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
      <div class="header-content">
        <h1 class="title">Frontend Component Syntaxs</h1>
        <ThemeToggle />
      </div>
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
  background-color: var(--bg-color);
}

.header {
  background: var(--header-bg);
  border-bottom: 1px solid var(--border-color);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 10;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-color);
}

.main {
  flex: 1;
  display: flex;
  background: var(--bg-secondary);
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
