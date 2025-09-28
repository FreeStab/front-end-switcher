<template>
  <label for="username">Username:</label>
  <input id="username" v-model="username" placeholder="Enter your username" />
  <p>Current value: {{ username }}</p>
</template>

<script setup>
import { ref } from "vue";

const username = ref("");
</script>
