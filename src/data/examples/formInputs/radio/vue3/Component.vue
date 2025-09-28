<template>
  <div>
    <h3>Programming Language</h3>
    <label v-for="language in languages" :key="language.id">
      <input
        v-model="selectedLanguage"
        :value="language.id"
        type="radio"
        name="language"
      />
      {{ language.label }}
    </label>
    <p>Selected: {{ selectedLanguage }}</p>

    <h3>Experience Level</h3>
    <label v-for="level in experienceLevels" :key="level.id">
      <input
        v-model="selectedLevel"
        :value="level.id"
        type="radio"
        name="experience"
      />
      {{ level.label }}
    </label>
    <p>Experience: {{ selectedLevel }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedLanguage = ref("javascript");
const selectedLevel = ref("intermediate");

const languages = [
  { id: "javascript", label: "JavaScript" },
  { id: "typescript", label: "TypeScript" },
  { id: "python", label: "Python" },
  { id: "rust", label: "Rust" },
];

const experienceLevels = [
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
  { id: "expert", label: "Expert" },
];
</script>
