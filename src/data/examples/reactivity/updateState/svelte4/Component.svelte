<script>
  let count = 0
  
  const increment = () => {
    count++
  }
</script>

<div>
  <div>{count}</div>
  <button on:click={increment}>+</button>
</div>