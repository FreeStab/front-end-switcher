<template>
  <div>
    <label for="username">Username:</label>
    <input v-model="username" type="text" placeholder="Enter your username" />
    <p>Current value: {{ username }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
    };
  },
};
</script>
