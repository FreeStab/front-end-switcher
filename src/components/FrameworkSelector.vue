<script setup>
import { computed } from 'vue'

const props = defineProps({
  frameworks: Array,
  selected: Array
})

const emit = defineEmits(['update:selected'])

const toggleFramework = (frameworkId) => {
  const newSelected = [...props.selected]
  const index = newSelected.indexOf(frameworkId)
  
  if (index > -1) {
    if (newSelected.length > 1) { // Keep at least one framework selected
      newSelected.splice(index, 1)
    }
  } else {
    newSelected.push(frameworkId)
  }
  
  emit('update:selected', newSelected)
}

const isSelected = (frameworkId) => {
  return props.selected.includes(frameworkId)
}
</script>

<template>
  <div class="framework-selector">
    <div class="frameworks-grid">
      <button
        v-for="framework in frameworks"
        :key="framework.id"
        @click="toggleFramework(framework.id)"
        :class="[
          'framework-button',
          { 'selected': isSelected(framework.id) }
        ]"
        :style="{ '--framework-color': framework.color }"
      >
        <img 
          :src="framework.logo" 
          :alt="`${framework.name} logo`"
          class="framework-logo"
        />
        {{ framework.name }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.framework-selector {
  margin-top: 0.5rem;
}

.frameworks-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.framework-button {
  padding: 0.5rem 1rem;
  border: 2px solid var(--border-color);
  border-radius: 0.5rem;
  background: var(--bg-color);
  color: var(--text-color);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.framework-logo {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}

.framework-button:hover {
  border-color: var(--framework-color);
  background-color: color-mix(in srgb, var(--framework-color) 10%, var(--bg-color));
}

.framework-button.selected {
  border-color: var(--framework-color);
  background-color: color-mix(in srgb, var(--framework-color) 15%, var(--bg-color));
  color: var(--framework-color);
}

.framework-button.selected:hover {
  background-color: color-mix(in srgb, var(--framework-color) 25%, var(--bg-color));
}

@media (max-width: 768px) {
  .framework-button {
    font-size: 0.75rem;
    padding: 0.375rem 0.75rem;
    gap: 0.375rem;
  }
  
  .framework-logo {
    width: 0.875rem;
    height: 0.875rem;
  }
}
</style>
