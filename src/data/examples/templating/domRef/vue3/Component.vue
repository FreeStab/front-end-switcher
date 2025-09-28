<template>
  <div>
    <input ref="inputRef" type="text" placeholder="Focus me!" />
    <button @click="focusInput">Focus Input</button>
    <p>Input value: {{ inputValue }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const inputRef = ref(null);
const inputValue = ref("");

const focusInput = () => {
  inputRef.value.focus();
  inputValue.value = inputRef.value.value;
};
</script>
