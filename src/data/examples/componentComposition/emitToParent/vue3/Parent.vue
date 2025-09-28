<template>
  <div>
    <p>Count: {{ count }}</p>
    <ChildComponent @increment="handleIncrement" @decrement="handleDecrement" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

const count = ref(0)

const handleIncrement = () => {
  count.value++
}

const handleDecrement = () => {
  count.value--
}
</script>