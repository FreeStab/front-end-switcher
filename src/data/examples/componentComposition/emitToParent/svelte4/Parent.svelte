<script>
  import ChildComponent from './ChildComponent.svelte'
  
  let count = 0
  
  function handleIncrement() {
    count++
  }
  
  function handleDecrement() {
    count--
  }
</script>

<div>
  <p>Count: {count}</p>
  <ChildComponent 
    on:increment={handleIncrement}
    on:decrement={handleDecrement}
  />
</div>