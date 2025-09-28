<template>
  <div>
    <h3>Single Checkbox</h3>
    <label>
      <input v-model="isChecked" type="checkbox" />
      Accept terms and conditions
    </label>
    <p>Accepted: {{ isChecked }}</p>

    <h3>Multiple Checkboxes</h3>
    <label v-for="option in options" :key="option.id">
      <input v-model="selectedOptions" :value="option.id" type="checkbox" />
      {{ option.label }}
    </label>
    <p>Selected: {{ selectedOptions.join(", ") }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isChecked = ref(false);
const selectedOptions = ref([]);

const options = [
  { id: "javascript", label: "JavaScript" },
  { id: "typescript", label: "TypeScript" },
  { id: "vue", label: "Vue.js" },
  { id: "react", label: "React" },
];
</script>
