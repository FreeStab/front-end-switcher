<script>
  let inputRef
  let inputValue = $state('')

  function focusInput() {
    inputRef.focus()
    inputValue = inputRef.value
  }
</script>

<div>
  <input bind:this={inputRef} type="text" placeholder="Focus me!" />
  <button onclick={focusInput}>Focus Input</button>
  <p>Input value: {inputValue}</p>
</div>