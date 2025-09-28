<template>
  <div>
    <h3>Single Select</h3>
    <label for="country">Country:</label>
    <select id="country" v-model="selectedCountry">
      <option value="">Select a country</option>
      <option
        v-for="country in countries"
        :key="country.code"
        :value="country.code"
      >
        {{ country.name }}
      </option>
    </select>
    <p>Selected: {{ selectedCountry }}</p>

    <h3>Multiple Select</h3>
    <label for="skills">Skills:</label>
    <select id="skills" v-model="selectedSkills" multiple>
      <option v-for="skill in skills" :key="skill.id" :value="skill.id">
        {{ skill.name }}
      </option>
    </select>
    <p>Selected: {{ selectedSkills.join(", ") }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCountry = ref("");
const selectedSkills = ref([]);

const countries = [
  { code: "us", name: "United States" },
  { code: "ca", name: "Canada" },
  { code: "uk", name: "United Kingdom" },
  { code: "fr", name: "France" },
  { code: "de", name: "Germany" },
];

const skills = [
  { id: "js", name: "JavaScript" },
  { id: "ts", name: "TypeScript" },
  { id: "vue", name: "Vue.js" },
  { id: "react", name: "React" },
  { id: "node", name: "Node.js" },
];
</script>
