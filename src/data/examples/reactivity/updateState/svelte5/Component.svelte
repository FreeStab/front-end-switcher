<script>
  let count = $state(0)
  
  const increment = () => {
    count++
  }
</script>

<div>
  <div>{count}</div>
  <button onclick={increment}>+</button>
</div>