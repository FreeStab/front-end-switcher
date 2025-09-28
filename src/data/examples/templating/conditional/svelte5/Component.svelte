<script>
  let isVisible = $state(true)
  let count = $state(3)

  function toggle() {
    isVisible = !isVisible
    count++
  }
</script>

<div>
  <button onclick={toggle}>Toggle</button>
  
  {#if isVisible}
    <p>This is visible!</p>
  {:else}
    <p>This is hidden!</p>
  {/if}
  
  {#if isVisible}
    <div>
      <h3>Conditional Content</h3>
      {#if count > 5}
        <p>Count is greater than 5: {count}</p>
      {:else if count > 0}
        <p>Count is between 1 and 5: {count}</p>
      {:else}
        <p>Count is 0 or negative</p>
      {/if}
    </div>
  {/if}
</div>