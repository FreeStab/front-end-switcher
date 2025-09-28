<script>
  let count = 0

  function handleClick() {
    count++
    console.log('Button clicked!')
  }
</script>

<div>
  <button on:click={handleClick}>Click me!</button>
  <p>Clicked {count} times</p>
</div>