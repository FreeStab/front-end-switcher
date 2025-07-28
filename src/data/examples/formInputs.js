/**
 * Form Input Examples
 * Examples demonstrating form input handling across frameworks
 */

export const inputText = {
  vue2: `<template>
  <div>
    <label for="username">Username:</label>
    <input 
      v-model="username" 
      type="text" 
      placeholder="Enter your username"
    />
    <p>Current value: {{ username }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ''
    }
  },
}
</script>`,

  vue3: `<template>
  <label for="username">Username:</label>
  <input 
    id="username"
    v-model="username" 
    placeholder="Enter your username"
  />
  <p>Current value: {{ username }}</p>
    
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
</script>`,

  react: `import { useState } from 'react'

function Component() {
  const [username, setUsername] = useState('')

  const handleInput = (event) => {
    setUsername(event.target.value)
    console.log('Input changed:', event.target.value)
  }

  return (
    <>
      <label htmlFor="username">Username:</label>
      <input 
        id="username"
        value={username}
        placeholder="Enter your username"
        onChange={handleInput}
      />
      <p>Current value: {username}</p>
    </>
  )
}`,

  svelte4: `<script>
  let username = ''
</script>

<div>
  <label for="username">Username:</label>
  <input 
    id="username"
    bind:value={username}
    placeholder="Enter your username"
  />
  <p>Current value: {username}</p>
</div>`,

  svelte5: `<script>
  let username = $state('')
</script>

<div>
  <label for="username">Username:</label>
  <input 
    id="username"
    bind:value={username}
    placeholder="Enter your username"
  />
  <p>Current value: {username}</p>
</div>`,

  angular: `import { Component } from '@angular/core'

@Component({
  selector: 'app-input',
  template: \`
    <div>
      <label for="username">Username:</label>
      <input 
        id="username"
        [(ngModel)]="username"
        type="text" 
        placeholder="Enter your username"
        (input)="handleInput($event)"
      />
      <p>Current value: {{ username }}</p>
      <p>Length: {{ username.length }}</p>
    </div>
  \`
})
export class InputComponent {
  username = ''

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement
    console.log('Input changed:', target.value)
  }
}`,

  "angular-renaissance": `import { Component, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-input',
  template: \`
    <div>
      <label for="username">Username:</label>
      <input 
        id="username"
        [(ngModel)]="username"
        type="text" 
        placeholder="Enter your username"
        (input)="handleInput($event)"
      />
      <p>Current value: {{ username() }}</p>
      <p>Length: {{ username().length }}</p>
    </div>
  \`,
  standalone: true,
  imports: [FormsModule]
})
export class InputComponent {
  username = signal('')

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement
    this.username.set(target.value)
    console.log('Input changed:', target.value)
  }
}`,

  ember: {
    files: [
      {
        name: "template.hbs",
        content: `<div>
  <label for="username">Username:</label>
  <Input 
    @id="username"
    @value={{this.username}}
    @type="text"
    @placeholder="Enter your username"
    @input={{this.handleInput}}
  />
  <p>Current value: {{this.username}}</p>
  <p>Length: {{this.username.length}}</p>
</div>`
      },
      {
        name: "component.js",
        content: `import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'

export default class InputComponent extends Component {
  @tracked username = ''

  @action
  handleInput(event) {
    this.username = event.target.value
    console.log('Input changed:', event.target.value)
  }
}`
      }
    ]
  },

  solid: `import { createSignal } from 'solid-js'

function Component() {
  const [username, setUsername] = createSignal('')

  const handleInput = (event) => {
    setUsername(event.target.value)
    console.log('Input changed:', event.target.value)
  }

  return (
    <div>
      <label for="username">Username:</label>
      <input 
        id="username"
        type="text" 
        value={username()}
        placeholder="Enter your username"
        onInput={handleInput}
      />
      <p>Current value: {username()}</p>
      <p>Length: {username().length}</p>
    </div>
  )
}`,

  alpine: `<div x-data="{ username: '' }">
  <label for="username">Username:</label>
  <input 
    id="username"
    x-model="username"
    type="text" 
    placeholder="Enter your username"
    @input="console.log('Input changed:', $event.target.value)"
  />
  <p>Current value: <span x-text="username"></span></p>
  <p>Length: <span x-text="username.length"></span></p>
</div>`,
};

export const checkbox = {
  vue2: `<template>
  <div>
    <h3>Single Checkbox</h3>
    <label>
      <input 
        v-model="isChecked" 
        type="checkbox"
      />
      Accept terms and conditions
    </label>
    <p>Accepted: {{ isChecked }}</p>

    <h3>Multiple Checkboxes</h3>
    <label v-for="option in options" :key="option.id">
      <input 
        v-model="selectedOptions" 
        :value="option.id"
        type="checkbox"
      />
      {{ option.label }}
    </label>
    <p>Selected: {{ selectedOptions.join(', ') }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false,
      selectedOptions: [],
      options: [
        { id: 'javascript', label: 'JavaScript' },
        { id: 'typescript', label: 'TypeScript' },
        { id: 'vue', label: 'Vue.js' },
        { id: 'react', label: 'React' }
      ]
    }
  }
}
</script>`,

  vue3: `<template>
  <div>
    <h3>Single Checkbox</h3>
    <label>
      <input 
        v-model="isChecked" 
        type="checkbox"
      />
      Accept terms and conditions
    </label>
    <p>Accepted: {{ isChecked }}</p>

    <h3>Multiple Checkboxes</h3>
    <label v-for="option in options" :key="option.id">
      <input 
        v-model="selectedOptions" 
        :value="option.id"
        type="checkbox"
      />
      {{ option.label }}
    </label>
    <p>Selected: {{ selectedOptions.join(', ') }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isChecked = ref(false)
const selectedOptions = ref([])

const options = [
  { id: 'javascript', label: 'JavaScript' },
  { id: 'typescript', label: 'TypeScript' },
  { id: 'vue', label: 'Vue.js' },
  { id: 'react', label: 'React' }
]
</script>`,

  react: `import { useState } from 'react'

function Component() {
  const [isChecked, setIsChecked] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState([])

  const options = [
    { id: 'javascript', label: 'JavaScript' },
    { id: 'typescript', label: 'TypeScript' },
    { id: 'vue', label: 'Vue.js' },
    { id: 'react', label: 'React' }
  ]

  const handleCheckboxChange = (optionId) => {
    setSelectedOptions(prev => 
      prev.includes(optionId)
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    )
  }

  return (
    <div>
      <h3>Single Checkbox</h3>
      <label>
        <input 
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        Accept terms and conditions
      </label>
      <p>Accepted: {isChecked.toString()}</p>

      <h3>Multiple Checkboxes</h3>
      {options.map(option => (
        <label key={option.id}>
          <input 
            type="checkbox"
            checked={selectedOptions.includes(option.id)}
            onChange={() => handleCheckboxChange(option.id)}
          />
          {option.label}
        </label>
      ))}
      <p>Selected: {selectedOptions.join(', ')}</p>
    </div>
  )
}`,

  svelte4: `<script>
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
</div>`,

  svelte5: `<script>
  let isChecked = $state(false)
  let selectedOptions = $state([])

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
</div>`,

  angular: `import { Component } from '@angular/core'

@Component({
  selector: 'app-checkbox',
  template: \`
    <div>
      <h3>Single Checkbox</h3>
      <label>
        <input 
          [(ngModel)]="isChecked"
          type="checkbox"
        />
        Accept terms and conditions
      </label>
      <p>Accepted: {{ isChecked }}</p>

      <h3>Multiple Checkboxes</h3>
      <label *ngFor="let option of options">
        <input 
          [checked]="selectedOptions.includes(option.id)"
          (change)="onCheckboxChange(option.id, $event)"
          type="checkbox"
        />
        {{ option.label }}
      </label>
      <p>Selected: {{ selectedOptions.join(', ') }}</p>
    </div>
  \`
})
export class CheckboxComponent {
  isChecked = false
  selectedOptions: string[] = []

  options = [
    { id: 'javascript', label: 'JavaScript' },
    { id: 'typescript', label: 'TypeScript' },
    { id: 'vue', label: 'Vue.js' },
    { id: 'react', label: 'React' }
  ]

  onCheckboxChange(optionId: string, event: Event) {
    const target = event.target as HTMLInputElement
    if (target.checked) {
      this.selectedOptions = [...this.selectedOptions, optionId]
    } else {
      this.selectedOptions = this.selectedOptions.filter(id => id !== optionId)
    }
  }
}`,

  "angular-renaissance": `import { Component, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-checkbox',
  template: \`
    <div>
      <h3>Single Checkbox</h3>
      <label>
        <input 
          [checked]="isChecked()"
          (change)="isChecked.set($any($event.target).checked)"
          type="checkbox"
        />
        Accept terms and conditions
      </label>
      <p>Accepted: {{ isChecked() }}</p>

      <h3>Multiple Checkboxes</h3>
      @for (option of options; track option.id) {
        <label>
          <input 
            [checked]="selectedOptions().includes(option.id)"
            (change)="onCheckboxChange(option.id, $event)"
            type="checkbox"
          />
          {{ option.label }}
        </label>
      }
      <p>Selected: {{ selectedOptions().join(', ') }}</p>
    </div>
  \`,
  standalone: true,
  imports: [FormsModule]
})
export class CheckboxComponent {
  isChecked = signal(false)
  selectedOptions = signal<string[]>([])

  options = [
    { id: 'javascript', label: 'JavaScript' },
    { id: 'typescript', label: 'TypeScript' },
    { id: 'vue', label: 'Vue.js' },
    { id: 'react', label: 'React' }
  ]

  onCheckboxChange(optionId: string, event: Event) {
    const target = event.target as HTMLInputElement
    this.selectedOptions.update(current => 
      target.checked 
        ? [...current, optionId]
        : current.filter(id => id !== optionId)
    )
  }
}`,

  ember: {
    files: [
      {
        name: "template.hbs",
        content: `<div>
  <h3>Single Checkbox</h3>
  <label>
    <Input 
      @type="checkbox"
      @checked={{this.isChecked}}
      {{on "change" this.toggleChecked}}
    />
    Accept terms and conditions
  </label>
  <p>Accepted: {{this.isChecked}}</p>

  <h3>Multiple Checkboxes</h3>
  {{#each this.options as |option|}}
    <label>
      <Input 
        @type="checkbox"
        @checked={{includes this.selectedOptions option.id}}
        {{on "change" (fn this.toggleOption option.id)}}
      />
      {{option.label}}
    </label>
  {{/each}}
  <p>Selected: {{join ", " this.selectedOptions}}</p>
</div>`
      },
      {
        name: "component.js",
        content: `import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'

export default class CheckboxComponent extends Component {
  @tracked isChecked = false
  @tracked selectedOptions = []

  options = [
    { id: 'javascript', label: 'JavaScript' },
    { id: 'typescript', label: 'TypeScript' },
    { id: 'vue', label: 'Vue.js' },
    { id: 'react', label: 'React' }
  ]

  @action
  toggleChecked() {
    this.isChecked = !this.isChecked
  }

  @action
  toggleOption(optionId) {
    if (this.selectedOptions.includes(optionId)) {
      this.selectedOptions = this.selectedOptions.filter(id => id !== optionId)
    } else {
      this.selectedOptions = [...this.selectedOptions, optionId]
    }
  }
}`
      }
    ]
  },

  solid: `import { createSignal } from 'solid-js'
import { For } from 'solid-js'

function Component() {
  const [isChecked, setIsChecked] = createSignal(false)
  const [selectedOptions, setSelectedOptions] = createSignal([])

  const options = [
    { id: 'javascript', label: 'JavaScript' },
    { id: 'typescript', label: 'TypeScript' },
    { id: 'vue', label: 'Vue.js' },
    { id: 'react', label: 'React' }
  ]

  const handleCheckboxChange = (optionId) => {
    setSelectedOptions(prev => 
      prev.includes(optionId)
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    )
  }

  return (
    <div>
      <h3>Single Checkbox</h3>
      <label>
        <input 
          type="checkbox"
          checked={isChecked()}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        Accept terms and conditions
      </label>
      <p>Accepted: {isChecked().toString()}</p>

      <h3>Multiple Checkboxes</h3>
      <For each={options}>
        {(option) => (
          <label>
            <input 
              type="checkbox"
              checked={selectedOptions().includes(option.id)}
              onChange={() => handleCheckboxChange(option.id)}
            />
            {option.label}
          </label>
        )}
      </For>
      <p>Selected: {selectedOptions().join(', ')}</p>
    </div>
  )
}`,

  alpine: `<div x-data="{
  isChecked: false,
  selectedOptions: [],
  options: [
    { id: 'javascript', label: 'JavaScript' },
    { id: 'typescript', label: 'TypeScript' },
    { id: 'vue', label: 'Vue.js' },
    { id: 'react', label: 'React' }
  ]
}">
  <h3>Single Checkbox</h3>
  <label>
    <input 
      x-model="isChecked"
      type="checkbox"
    />
    Accept terms and conditions
  </label>
  <p>Accepted: <span x-text="isChecked"></span></p>

  <h3>Multiple Checkboxes</h3>
  <template x-for="option in options" :key="option.id">
    <label>
      <input 
        x-model="selectedOptions"
        :value="option.id"
        type="checkbox"
      />
      <span x-text="option.label"></span>
    </label>
  </template>
  <p>Selected: <span x-text="selectedOptions.join(', ')"></span></p>
</div>`,
};

export const radio = {
  vue2: `<template>
  <div>
    <h3>Programming Language</h3>
    <label v-for="language in languages" :key="language.id">
      <input 
        v-model="selectedLanguage" 
        :value="language.id"
        type="radio"
        name="language"
      />
      {{ language.label }}
    </label>
    <p>Selected: {{ selectedLanguage }}</p>

    <h3>Experience Level</h3>
    <label v-for="level in experienceLevels" :key="level.id">
      <input 
        v-model="selectedLevel" 
        :value="level.id"
        type="radio"
        name="experience"
      />
      {{ level.label }}
    </label>
    <p>Experience: {{ selectedLevel }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLanguage: 'javascript',
      selectedLevel: 'intermediate',
      languages: [
        { id: 'javascript', label: 'JavaScript' },
        { id: 'typescript', label: 'TypeScript' },
        { id: 'python', label: 'Python' },
        { id: 'rust', label: 'Rust' }
      ],
      experienceLevels: [
        { id: 'beginner', label: 'Beginner' },
        { id: 'intermediate', label: 'Intermediate' },
        { id: 'advanced', label: 'Advanced' },
        { id: 'expert', label: 'Expert' }
      ]
    }
  }
}
</script>`,

  vue3: `<template>
  <div>
    <h3>Programming Language</h3>
    <label v-for="language in languages" :key="language.id">
      <input 
        v-model="selectedLanguage" 
        :value="language.id"
        type="radio"
        name="language"
      />
      {{ language.label }}
    </label>
    <p>Selected: {{ selectedLanguage }}</p>

    <h3>Experience Level</h3>
    <label v-for="level in experienceLevels" :key="level.id">
      <input 
        v-model="selectedLevel" 
        :value="level.id"
        type="radio"
        name="experience"
      />
      {{ level.label }}
    </label>
    <p>Experience: {{ selectedLevel }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedLanguage = ref('javascript')
const selectedLevel = ref('intermediate')

const languages = [
  { id: 'javascript', label: 'JavaScript' },
  { id: 'typescript', label: 'TypeScript' },
  { id: 'python', label: 'Python' },
  { id: 'rust', label: 'Rust' }
]

const experienceLevels = [
  { id: 'beginner', label: 'Beginner' },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'advanced', label: 'Advanced' },
  { id: 'expert', label: 'Expert' }
]
</script>`,

  react: `import { useState } from 'react'

function Component() {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript')
  const [selectedLevel, setSelectedLevel] = useState('intermediate')

  const languages = [
    { id: 'javascript', label: 'JavaScript' },
    { id: 'typescript', label: 'TypeScript' },
    { id: 'python', label: 'Python' },
    { id: 'rust', label: 'Rust' }
  ]

  const experienceLevels = [
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' },
    { id: 'expert', label: 'Expert' }
  ]

  return (
    <div>
      <h3>Programming Language</h3>
      {languages.map(language => (
        <label key={language.id}>
          <input 
            type="radio"
            name="language"
            value={language.id}
            checked={selectedLanguage === language.id}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          />
          {language.label}
        </label>
      ))}
      <p>Selected: {selectedLanguage}</p>

      <h3>Experience Level</h3>
      {experienceLevels.map(level => (
        <label key={level.id}>
          <input 
            type="radio"
            name="experience"
            value={level.id}
            checked={selectedLevel === level.id}
            onChange={(e) => setSelectedLevel(e.target.value)}
          />
          {level.label}
        </label>
      ))}
      <p>Experience: {selectedLevel}</p>
    </div>
  )
}`,

  svelte4: `<script>
  let selectedLanguage = 'javascript'
  let selectedLevel = 'intermediate'

  const languages = [
    { id: 'javascript', label: 'JavaScript' },
    { id: 'typescript', label: 'TypeScript' },
    { id: 'python', label: 'Python' },
    { id: 'rust', label: 'Rust' }
  ]

  const experienceLevels = [
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' },
    { id: 'expert', label: 'Expert' }
  ]
</script>

<div>
  <h3>Programming Language</h3>
  {#each languages as language (language.id)}
    <label>
      <input 
        bind:group={selectedLanguage}
        value={language.id}
        type="radio"
        name="language"
      />
      {language.label}
    </label>
  {/each}
  <p>Selected: {selectedLanguage}</p>

  <h3>Experience Level</h3>
  {#each experienceLevels as level (level.id)}
    <label>
      <input 
        bind:group={selectedLevel}
        value={level.id}
        type="radio"
        name="experience"
      />
      {level.label}
    </label>
  {/each}
  <p>Experience: {selectedLevel}</p>
</div>`,

  svelte5: `<script>
  let selectedLanguage = $state('javascript')
  let selectedLevel = $state('intermediate')

  const languages = [
    { id: 'javascript', label: 'JavaScript' },
    { id: 'typescript', label: 'TypeScript' },
    { id: 'python', label: 'Python' },
    { id: 'rust', label: 'Rust' }
  ]

  const experienceLevels = [
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' },
    { id: 'expert', label: 'Expert' }
  ]
</script>

<div>
  <h3>Programming Language</h3>
  {#each languages as language (language.id)}
    <label>
      <input 
        bind:group={selectedLanguage}
        value={language.id}
        type="radio"
        name="language"
      />
      {language.label}
    </label>
  {/each}
  <p>Selected: {selectedLanguage}</p>

  <h3>Experience Level</h3>
  {#each experienceLevels as level (level.id)}
    <label>
      <input 
        bind:group={selectedLevel}
        value={level.id}
        type="radio"
        name="experience"
      />
      {level.label}
    </label>
  {/each}
  <p>Experience: {selectedLevel}</p>
</div>`,

  angular: `import { Component } from '@angular/core'

@Component({
  selector: 'app-radio',
  template: \`
    <div>
      <h3>Programming Language</h3>
      <label *ngFor="let language of languages">
        <input 
          [(ngModel)]="selectedLanguage"
          [value]="language.id"
          type="radio"
          name="language"
        />
        {{ language.label }}
      </label>
      <p>Selected: {{ selectedLanguage }}</p>

      <h3>Experience Level</h3>
      <label *ngFor="let level of experienceLevels">
        <input 
          [(ngModel)]="selectedLevel"
          [value]="level.id"
          type="radio"
          name="experience"
        />
        {{ level.label }}
      </label>
      <p>Experience: {{ selectedLevel }}</p>
    </div>
  \`
})
export class RadioComponent {
  selectedLanguage = 'javascript'
  selectedLevel = 'intermediate'

  languages = [
    { id: 'javascript', label: 'JavaScript' },
    { id: 'typescript', label: 'TypeScript' },
    { id: 'python', label: 'Python' },
    { id: 'rust', label: 'Rust' }
  ]

  experienceLevels = [
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' },
    { id: 'expert', label: 'Expert' }
  ]
}`,

  "angular-renaissance": `import { Component, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-radio',
  template: \`
    <div>
      <h3>Programming Language</h3>
      @for (language of languages; track language.id) {
        <label>
          <input 
            [value]="language.id"
            [checked]="selectedLanguage() === language.id"
            (change)="selectedLanguage.set(language.id)"
            type="radio"
            name="language"
          />
          {{ language.label }}
        </label>
      }
      <p>Selected: {{ selectedLanguage() }}</p>

      <h3>Experience Level</h3>
      @for (level of experienceLevels; track level.id) {
        <label>
          <input 
            [value]="level.id"
            [checked]="selectedLevel() === level.id"
            (change)="selectedLevel.set(level.id)"
            type="radio"
            name="experience"
          />
          {{ level.label }}
        </label>
      }
      <p>Experience: {{ selectedLevel() }}</p>
    </div>
  \`,
  standalone: true,
  imports: [FormsModule]
})
export class RadioComponent {
  selectedLanguage = signal('javascript')
  selectedLevel = signal('intermediate')

  languages = [
    { id: 'javascript', label: 'JavaScript' },
    { id: 'typescript', label: 'TypeScript' },
    { id: 'python', label: 'Python' },
    { id: 'rust', label: 'Rust' }
  ]

  experienceLevels = [
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' },
    { id: 'expert', label: 'Expert' }
  ]
}`,

  ember: {
    files: [
      {
        name: "template.hbs",
        content: `<div>
  <h3>Programming Language</h3>
  {{#each this.languages as |language|}}
    <label>
      <Input 
        @type="radio"
        @name="language"
        @value={{language.id}}
        @checked={{eq this.selectedLanguage language.id}}
        {{on "change" (fn this.selectLanguage language.id)}}
      />
      {{language.label}}
    </label>
  {{/each}}
  <p>Selected: {{this.selectedLanguage}}</p>

  <h3>Experience Level</h3>
  {{#each this.experienceLevels as |level|}}
    <label>
      <Input 
        @type="radio"
        @name="experience"
        @value={{level.id}}
        @checked={{eq this.selectedLevel level.id}}
        {{on "change" (fn this.selectLevel level.id)}}
      />
      {{level.label}}
    </label>
  {{/each}}
  <p>Experience: {{this.selectedLevel}}</p>
</div>`
      },
      {
        name: "component.js",
        content: `import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'

export default class RadioComponent extends Component {
  @tracked selectedLanguage = 'javascript'
  @tracked selectedLevel = 'intermediate'

  languages = [
    { id: 'javascript', label: 'JavaScript' },
    { id: 'typescript', label: 'TypeScript' },
    { id: 'python', label: 'Python' },
    { id: 'rust', label: 'Rust' }
  ]

  experienceLevels = [
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' },
    { id: 'expert', label: 'Expert' }
  ]

  @action
  selectLanguage(languageId) {
    this.selectedLanguage = languageId
  }

  @action
  selectLevel(levelId) {
    this.selectedLevel = levelId
  }
}`
      }
    ]
  },

  solid: `import { createSignal } from 'solid-js'
import { For } from 'solid-js'

function Component() {
  const [selectedLanguage, setSelectedLanguage] = createSignal('javascript')
  const [selectedLevel, setSelectedLevel] = createSignal('intermediate')

  const languages = [
    { id: 'javascript', label: 'JavaScript' },
    { id: 'typescript', label: 'TypeScript' },
    { id: 'python', label: 'Python' },
    { id: 'rust', label: 'Rust' }
  ]

  const experienceLevels = [
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' },
    { id: 'expert', label: 'Expert' }
  ]

  return (
    <div>
      <h3>Programming Language</h3>
      <For each={languages}>
        {(language) => (
          <label>
            <input 
              type="radio"
              name="language"
              value={language.id}
              checked={selectedLanguage() === language.id}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            />
            {language.label}
          </label>
        )}
      </For>
      <p>Selected: {selectedLanguage()}</p>

      <h3>Experience Level</h3>
      <For each={experienceLevels}>
        {(level) => (
          <label>
            <input 
              type="radio"
              name="experience"
              value={level.id}
              checked={selectedLevel() === level.id}
              onChange={(e) => setSelectedLevel(e.target.value)}
            />
            {level.label}
          </label>
        )}
      </For>
      <p>Experience: {selectedLevel()}</p>
    </div>
  )
}`,

  alpine: `<div x-data="{
  selectedLanguage: 'javascript',
  selectedLevel: 'intermediate',
  languages: [
    { id: 'javascript', label: 'JavaScript' },
    { id: 'typescript', label: 'TypeScript' },
    { id: 'python', label: 'Python' },
    { id: 'rust', label: 'Rust' }
  ],
  experienceLevels: [
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' },
    { id: 'expert', label: 'Expert' }
  ]
}">
  <h3>Programming Language</h3>
  <template x-for="language in languages" :key="language.id">
    <label>
      <input 
        x-model="selectedLanguage"
        :value="language.id"
        type="radio"
        name="language"
      />
      <span x-text="language.label"></span>
    </label>
  </template>
  <p>Selected: <span x-text="selectedLanguage"></span></p>

  <h3>Experience Level</h3>
  <template x-for="level in experienceLevels" :key="level.id">
    <label>
      <input 
        x-model="selectedLevel"
        :value="level.id"
        type="radio"
        name="experience"
      />
      <span x-text="level.label"></span>
    </label>
  </template>
  <p>Experience: <span x-text="selectedLevel"></span></p>
</div>`,
};

export const selectDropdown = {
  vue2: `<template>
  <div>
    <h3>Single Select</h3>
    <label for="country">Country:</label>
    <select id="country" v-model="selectedCountry">
      <option value="">Select a country</option>
      <option 
        v-for="country in countries" 
        :key="country.code" 
        :value="country.code"
      >
        {{ country.name }}
      </option>
    </select>
    <p>Selected: {{ selectedCountry }}</p>

    <h3>Multiple Select</h3>
    <label for="skills">Skills:</label>
    <select id="skills" v-model="selectedSkills" multiple>
      <option 
        v-for="skill in skills" 
        :key="skill.id" 
        :value="skill.id"
      >
        {{ skill.name }}
      </option>
    </select>
    <p>Selected: {{ selectedSkills.join(', ') }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCountry: '',
      selectedSkills: [],
      countries: [
        { code: 'us', name: 'United States' },
        { code: 'ca', name: 'Canada' },
        { code: 'uk', name: 'United Kingdom' },
        { code: 'fr', name: 'France' },
        { code: 'de', name: 'Germany' }
      ],
      skills: [
        { id: 'js', name: 'JavaScript' },
        { id: 'ts', name: 'TypeScript' },
        { id: 'vue', name: 'Vue.js' },
        { id: 'react', name: 'React' },
        { id: 'node', name: 'Node.js' }
      ]
    }
  }
}
</script>`,

  vue3: `<template>
  <div>
    <h3>Single Select</h3>
    <label for="country">Country:</label>
    <select id="country" v-model="selectedCountry">
      <option value="">Select a country</option>
      <option 
        v-for="country in countries" 
        :key="country.code" 
        :value="country.code"
      >
        {{ country.name }}
      </option>
    </select>
    <p>Selected: {{ selectedCountry }}</p>

    <h3>Multiple Select</h3>
    <label for="skills">Skills:</label>
    <select id="skills" v-model="selectedSkills" multiple>
      <option 
        v-for="skill in skills" 
        :key="skill.id" 
        :value="skill.id"
      >
        {{ skill.name }}
      </option>
    </select>
    <p>Selected: {{ selectedSkills.join(', ') }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedCountry = ref('')
const selectedSkills = ref([])

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
</script>`,

  react: `import { useState } from 'react'

function Component() {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedSkills, setSelectedSkills] = useState([])

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

  const handleSkillsChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value)
    setSelectedSkills(selectedOptions)
  }

  return (
    <div>
      <h3>Single Select</h3>
      <label htmlFor="country">Country:</label>
      <select 
        id="country" 
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="">Select a country</option>
        {countries.map(country => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      <p>Selected: {selectedCountry}</p>

      <h3>Multiple Select</h3>
      <label htmlFor="skills">Skills:</label>
      <select 
        id="skills" 
        multiple 
        value={selectedSkills}
        onChange={handleSkillsChange}
      >
        {skills.map(skill => (
          <option key={skill.id} value={skill.id}>
            {skill.name}
          </option>
        ))}
      </select>
      <p>Selected: {selectedSkills.join(', ')}</p>
    </div>
  )
}`,

  svelte4: `<script>
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
</div>`,

  svelte5: `<script>
  let selectedCountry = $state('')
  let selectedSkills = $state([])

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
</div>`,

  angular: `import { Component } from '@angular/core'

@Component({
  selector: 'app-select',
  template: \`
    <div>
      <h3>Single Select</h3>
      <label for="country">Country:</label>
      <select id="country" [(ngModel)]="selectedCountry">
        <option value="">Select a country</option>
        <option 
          *ngFor="let country of countries" 
          [value]="country.code"
        >
          {{ country.name }}
        </option>
      </select>
      <p>Selected: {{ selectedCountry }}</p>

      <h3>Multiple Select</h3>
      <label for="skills">Skills:</label>
      <select id="skills" [(ngModel)]="selectedSkills" multiple>
        <option 
          *ngFor="let skill of skills" 
          [value]="skill.id"
        >
          {{ skill.name }}
        </option>
      </select>
      <p>Selected: {{ selectedSkills.join(', ') }}</p>
    </div>
  \`
})
export class SelectComponent {
  selectedCountry = ''
  selectedSkills: string[] = []

  countries = [
    { code: 'us', name: 'United States' },
    { code: 'ca', name: 'Canada' },
    { code: 'uk', name: 'United Kingdom' },
    { code: 'fr', name: 'France' },
    { code: 'de', name: 'Germany' }
  ]

  skills = [
    { id: 'js', name: 'JavaScript' },
    { id: 'ts', name: 'TypeScript' },
    { id: 'vue', name: 'Vue.js' },
    { id: 'react', name: 'React' },
    { id: 'node', name: 'Node.js' }
  ]
}`,

  "angular-renaissance": `import { Component, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-select',
  template: \`
    <div>
      <h3>Single Select</h3>
      <label for="country">Country:</label>
      <select id="country" [value]="selectedCountry()" (change)="updateCountry($event)">
        <option value="">Select a country</option>
        @for (country of countries; track country.code) {
          <option [value]="country.code">{{ country.name }}</option>
        }
      </select>
      <p>Selected: {{ selectedCountry() }}</p>

      <h3>Multiple Select</h3>
      <label for="skills">Skills:</label>
      <select id="skills" [value]="selectedSkills()" (change)="updateSkills($event)" multiple>
        @for (skill of skills; track skill.id) {
          <option [value]="skill.id">{{ skill.name }}</option>
        }
      </select>
      <p>Selected: {{ selectedSkills().join(', ') }}</p>
    </div>
  \`,
  standalone: true,
  imports: [FormsModule]
})
export class SelectComponent {
  selectedCountry = signal('')
  selectedSkills = signal<string[]>([])

  countries = [
    { code: 'us', name: 'United States' },
    { code: 'ca', name: 'Canada' },
    { code: 'uk', name: 'United Kingdom' },
    { code: 'fr', name: 'France' },
    { code: 'de', name: 'Germany' }
  ]

  skills = [
    { id: 'js', name: 'JavaScript' },
    { id: 'ts', name: 'TypeScript' },
    { id: 'vue', name: 'Vue.js' },
    { id: 'react', name: 'React' },
    { id: 'node', name: 'Node.js' }
  ]

  updateCountry(event: Event) {
    const target = event.target as HTMLSelectElement
    this.selectedCountry.set(target.value)
  }

  updateSkills(event: Event) {
    const target = event.target as HTMLSelectElement
    const values = Array.from(target.selectedOptions, option => option.value)
    this.selectedSkills.set(values)
  }
}`,

  ember: `{{!-- template --}}
<div>
  <h3>Single Select</h3>
  <label for="country">Country:</label>
  <select id="country" {{on "change" this.updateCountry}}>
    <option value="">Select a country</option>
    {{#each this.countries as |country|}}
      <option value={{country.code}} selected={{eq this.selectedCountry country.code}}>
        {{country.name}}
      </option>
    {{/each}}
  </select>
  <p>Selected: {{this.selectedCountry}}</p>

  <h3>Multiple Select</h3>
  <label for="skills">Skills:</label>
  <select id="skills" {{on "change" this.updateSkills}} multiple>
    {{#each this.skills as |skill|}}
      <option value={{skill.id}} selected={{includes this.selectedSkills skill.id}}>
        {{skill.name}}
      </option>
    {{/each}}
  </select>
  <p>Selected: {{join ", " this.selectedSkills}}</p>
</div>

{{!-- component.js --}}
import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'

export default class SelectComponent extends Component {
  @tracked selectedCountry = ''
  @tracked selectedSkills = []

  countries = [
    { code: 'us', name: 'United States' },
    { code: 'ca', name: 'Canada' },
    { code: 'uk', name: 'United Kingdom' },
    { code: 'fr', name: 'France' },
    { code: 'de', name: 'Germany' }
  ]

  skills = [
    { id: 'js', name: 'JavaScript' },
    { id: 'ts', name: 'TypeScript' },
    { id: 'vue', name: 'Vue.js' },
    { id: 'react', name: 'React' },
    { id: 'node', name: 'Node.js' }
  ]

  @action
  updateCountry(event) {
    this.selectedCountry = event.target.value
  }

  @action
  updateSkills(event) {
    this.selectedSkills = Array.from(event.target.selectedOptions, option => option.value)
  }
}`,

  solid: `import { createSignal } from 'solid-js'
import { For } from 'solid-js'

function Component() {
  const [selectedCountry, setSelectedCountry] = createSignal('')
  const [selectedSkills, setSelectedSkills] = createSignal([])

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

  const handleSkillsChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value)
    setSelectedSkills(selectedOptions)
  }

  return (
    <div>
      <h3>Single Select</h3>
      <label for="country">Country:</label>
      <select 
        id="country" 
        value={selectedCountry()}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="">Select a country</option>
        <For each={countries}>
          {(country) => (
            <option value={country.code}>{country.name}</option>
          )}
        </For>
      </select>
      <p>Selected: {selectedCountry()}</p>

      <h3>Multiple Select</h3>
      <label for="skills">Skills:</label>
      <select 
        id="skills" 
        multiple 
        onChange={handleSkillsChange}
      >
        <For each={skills}>
          {(skill) => (
            <option value={skill.id}>{skill.name}</option>
          )}
        </For>
      </select>
      <p>Selected: {selectedSkills().join(', ')}</p>
    </div>
  )
}`,

  alpine: `<div x-data="{
  selectedCountry: '',
  selectedSkills: [],
  countries: [
    { code: 'us', name: 'United States' },
    { code: 'ca', name: 'Canada' },
    { code: 'uk', name: 'United Kingdom' },
    { code: 'fr', name: 'France' },
    { code: 'de', name: 'Germany' }
  ],
  skills: [
    { id: 'js', name: 'JavaScript' },
    { id: 'ts', name: 'TypeScript' },
    { id: 'vue', name: 'Vue.js' },
    { id: 'react', name: 'React' },
    { id: 'node', name: 'Node.js' }
  ]
}">
  <h3>Single Select</h3>
  <label for="country">Country:</label>
  <select id="country" x-model="selectedCountry">
    <option value="">Select a country</option>
    <template x-for="country in countries" :key="country.code">
      <option :value="country.code" x-text="country.name"></option>
    </template>
  </select>
  <p>Selected: <span x-text="selectedCountry"></span></p>

  <h3>Multiple Select</h3>
  <label for="skills">Skills:</label>
  <select id="skills" x-model="selectedSkills" multiple>
    <template x-for="skill in skills" :key="skill.id">
      <option :value="skill.id" x-text="skill.name"></option>
    </template>
  </select>
  <p>Selected: <span x-text="selectedSkills.join(', ')"></span></p>
</div>`,
};
