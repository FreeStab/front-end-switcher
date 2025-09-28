<script>
  import ChildComponent from './ChildComponent.svelte'
  
  let pageTitle = $state('Hello World')
  let counter = $state(42)
  let isActive = $state(true)
</script>

<div>
  <ChildComponent 
    title={pageTitle}
    count={counter}
    {isActive}
  />
</div>