<script>
  let isChecked = false
  let selectedOptions = []

  const options = [
    { id: 'javascript', label: 'JavaScript' },
    { id: 'typescript', label: 'TypeScript' },
    { id: 'vue', label: 'Vue.js' },
    { id: 'react', label: 'React' }
  ]
</script>

<div>
  <h3>Single Checkbox</h3>
  <label>
    <input 
      bind:checked={isChecked}
      type="checkbox"
    />
    Accept terms and conditions
  </label>
  <p>Accepted: {isChecked}</p>

  <h3>Multiple Checkboxes</h3>
  {#each options as option (option.id)}
    <label>
      <input 
        bind:group={selectedOptions}
        value={option.id}
        type="checkbox"
      />
      {option.label}
    </label>
  {/each}
  <p>Selected: {selectedOptions.join(', ')}</p>
</div>