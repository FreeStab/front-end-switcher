<script>
  let count = $state(0)

  function handleClick() {
    count++
    console.log('Button clicked!')
  }
</script>

<div>
  <button onclick={handleClick}>Click me!</button>
  <p>Clicked {count} times</p>
</div>