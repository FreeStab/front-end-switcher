<script>
  let selectedCountry = ''
  let selectedSkills = []

  const countries = [
    { code: 'us', name: 'United States' },
    { code: 'ca', name: 'Canada' },
    { code: 'uk', name: 'United Kingdom' },
    { code: 'fr', name: 'France' },
    { code: 'de', name: 'Germany' }
  ]

  const skills = [
    { id: 'js', name: 'JavaScript' },
    { id: 'ts', name: 'TypeScript' },
    { id: 'vue', name: 'Vue.js' },
    { id: 'react', name: 'React' },
    { id: 'node', name: 'Node.js' }
  ]
</script>

<div>
  <h3>Single Select</h3>
  <label for="country">Country:</label>
  <select id="country" bind:value={selectedCountry}>
    <option value="">Select a country</option>
    {#each countries as country (country.code)}
      <option value={country.code}>{country.name}</option>
    {/each}
  </select>
  <p>Selected: {selectedCountry}</p>

  <h3>Multiple Select</h3>
  <label for="skills">Skills:</label>
  <select id="skills" bind:value={selectedSkills} multiple>
    {#each skills as skill (skill.id)}
      <option value={skill.id}>{skill.name}</option>
    {/each}
  </select>
  <p>Selected: {selectedSkills.join(', ')}</p>
</div>