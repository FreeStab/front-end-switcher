<script>
  import { createEventDispatcher } from 'svelte'
  
  const dispatch = createEventDispatcher()
  
  function increment() {
    dispatch('increment')
  }
  
  function decrement() {
    dispatch('decrement')
  }
</script>

<div>
  <button on:click={increment}>+</button>
  <button on:click={decrement}>-</button>
</div>