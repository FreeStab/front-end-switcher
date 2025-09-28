<script>
  import ChildComponent from './ChildComponent.svelte'
  
  let pageTitle = 'Hello World'
  let counter = 42
  let isActive = true
</script>

<div>
  <ChildComponent 
    title={pageTitle}
    count={counter}
    {isActive}
  />
</div>