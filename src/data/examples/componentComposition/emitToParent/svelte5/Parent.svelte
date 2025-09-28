<script>
  import ChildComponent from './ChildComponent.svelte'
  
  let count = $state(0)
  
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
    onincrement={handleIncrement}
    ondecrement={handleDecrement}
  />
</div>