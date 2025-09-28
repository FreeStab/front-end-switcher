<template>
  <div>
    <ChildComponent :title="pageTitle" :count="counter" :is-active="isActive" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

const pageTitle = ref("Hello World");
const counter = ref(42);
const isActive = ref(true);
</script>
