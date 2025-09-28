<script>
  let username = ''
</script>

<div>
  <label for="username">Username:</label>
  <input 
    id="username"
    bind:value={username}
    placeholder="Enter your username"
  />
  <p>Current value: {username}</p>
</div>