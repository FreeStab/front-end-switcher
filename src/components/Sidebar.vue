<script setup>
const props = defineProps({
  categories: Array,
  selected: String
})

const emit = defineEmits(['update:selected'])

const selectExample = (exampleId) => {
  emit('update:selected', exampleId)
}
</script>

<template>
  <aside class="sidebar">
    <nav class="navigation">
      <div
        v-for="category in categories"
        :key="category.id"
        class="category"
      >
        <h3 class="category-title">{{ category.name }}</h3>
        <ul class="category-items">
          <li
            v-for="item in category.items"
            :key="item.id"
            class="category-item"
          >
            <button
              @click="selectExample(item.id)"
              :class="[
                'example-button',
                { 'selected': selected === item.id }
              ]"
            >
              {{ item.name }}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 280px;
  background: var(--sidebar-bg);
  border-right: 1px solid var(--border-color);
  padding: 1.5rem;
  overflow-y: auto;
  height: calc(100vh - 120px);
  position: sticky;
  top: 120px;
}

.navigation {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.category-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 0 0 0.75rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.category-items {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.category-item {
  margin: 0;
}

.example-button {
  width: 100%;
  text-align: left;
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  color: var(--text-secondary);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.15s ease;
}

.example-button:hover {
  background: var(--hover-bg);
  color: var(--text-color);
}

.example-button.selected {
  background: #3b82f6;
  color: white;
}

.example-button.selected:hover {
  background: #2563eb;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: static;
    border-right: none;
    border-bottom: 1px solid var(--border-color);
    padding: 1rem;
  }
  
  .navigation {
    gap: 1rem;
  }
  
  .category-items {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .example-button {
    width: auto;
    flex: 1;
    min-width: fit-content;
  }
}
</style>
