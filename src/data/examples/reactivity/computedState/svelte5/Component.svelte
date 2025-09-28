<script>
  let count = $state(0)
  const doubleCount = $derived(count * 2)
</script>

<div>
  <div>{count}</div>
  <div>{doubleCount}</div>
</div>