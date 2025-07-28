/**
 * Component Composition Examples
 * Examples demonstrating component communication and composition patterns
 */

export const props = {
  vue2: {
    files: [
      {
        name: "Parent.vue",
        content: `<template>
  <div>
    <ChildComponent 
      :title="pageTitle" 
      :count="counter" 
      :is-active="isActive" 
    />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'

export default {
  components: { ChildComponent },
  data() {
    return {
      pageTitle: 'Hello World',
      counter: 42,
      isActive: true
    }
  }
}
</script>`
      },
      {
        name: "ChildComponent.vue",
        content: `<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Count: {{ count }}</p>
    <p>Status: {{ isActive ? 'Active' : 'Inactive' }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      default: 0
    },
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>`
      }
    ]
  },

  vue3: {
    files: [
      {
        name: "Parent.vue",
        content: `<template>
  <div>
    <ChildComponent 
      :title="pageTitle" 
      :count="counter" 
      :is-active="isActive" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

const pageTitle = ref('Hello World')
const counter = ref(42)
const isActive = ref(true)
</script>`
      },
      {
        name: "ChildComponent.vue",
        content: `<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Count: {{ count }}</p>
    <p>Status: {{ isActive ? 'Active' : 'Inactive' }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: false
  }
})
</script>`
      }
    ]
  },

  react: {
    files: [
      {
        name: "Parent.jsx",
        content: `import ChildComponent from './ChildComponent'

function Parent() {
  const pageTitle = 'Hello World'
  const counter = 42
  const isActive = true
  
  return (
    <div>
      <ChildComponent 
        title={pageTitle}
        count={counter}
        isActive={isActive}
      />
    </div>
  )
}

export default Parent`
      },
      {
        name: "ChildComponent.jsx",
        content: `function ChildComponent({ title, count = 0, isActive = false }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>Count: {count}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  )
}

export default ChildComponent`
      },
      {
        name: "ChildComponent.tsx",
        content: `interface ChildProps {
  title: string
  count?: number
  isActive?: boolean
}

function ChildComponent({ title, count = 0, isActive = false }: ChildProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>Count: {count}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  )
}

export default ChildComponent`
      }
    ]
  },

  svelte4: {
    files: [
      {
        name: "Parent.svelte",
        content: `<script>
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
</div>`
      },
      {
        name: "ChildComponent.svelte",
        content: `<script>
  export let title
  export let count = 0
  export let isActive = false
</script>

<div>
  <h1>{title}</h1>
  <p>Count: {count}</p>
  <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
</div>`
      }
    ]
  },

  svelte5: {
    files: [
      {
        name: "Parent.svelte",
        content: `<script>
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
</div>`
      },
      {
        name: "ChildComponent.svelte",
        content: `<script>
  let { title, count = 0, isActive = false } = $props()
</script>

<div>
  <h1>{title}</h1>
  <p>Count: {count}</p>
  <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
</div>`
      }
    ]
  },

  angular: {
    files: [
      {
        name: "parent.component.ts",
        content: `import { Component } from '@angular/core'

@Component({
  selector: 'app-parent',
  template: \`
    <div>
      <app-child 
        [title]="pageTitle"
        [count]="counter"
        [isActive]="isActive">
      </app-child>
    </div>
  \`
})
export class ParentComponent {
  pageTitle = 'Hello World'
  counter = 42
  isActive = true
}`
      },
      {
        name: "child.component.ts",
        content: `import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-child',
  template: \`
    <div>
      <h1>{{ title }}</h1>
      <p>Count: {{ count }}</p>
      <p>Status: {{ isActive ? 'Active' : 'Inactive' }}</p>
    </div>
  \`
})
export class ChildComponent {
  @Input() title!: string
  @Input() count: number = 0
  @Input() isActive: boolean = false
}`
      }
    ]
  },

  "angular-renaissance": {
    files: [
      {
        name: "parent.component.ts",
        content: `import { Component, signal } from '@angular/core'

@Component({
  selector: 'app-parent',
  template: \`
    <div>
      <app-child 
        [title]="pageTitle()"
        [count]="counter()"
        [isActive]="isActive()">
      </app-child>
    </div>
  \`
})
export class ParentComponent {
  pageTitle = signal('Hello World')
  counter = signal(42)
  isActive = signal(true)
}`
      },
      {
        name: "child.component.ts",
        content: `import { Component, input } from '@angular/core'

@Component({
  selector: 'app-child',
  template: \`
    <div>
      <h1>{{ title() }}</h1>
      <p>Count: {{ count() }}</p>
      <p>Status: {{ isActive() ? 'Active' : 'Inactive' }}</p>
    </div>
  \`
})
export class ChildComponent {
  title = input.required<string>()
  count = input(0)
  isActive = input(false)
}`
      }
    ]
  },

  ember: {
    files: [
      {
        name: "parent.hbs",
        content: `<div>
  <ChildComponent 
    @title={{this.pageTitle}}
    @count={{this.counter}}
    @isActive={{this.isActive}}
  />
</div>`
      },
      {
        name: "parent.js",
        content: `import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'

export default class ParentComponent extends Component {
  @tracked pageTitle = 'Hello World'
  @tracked counter = 42
  @tracked isActive = true
}`
      },
      {
        name: "child.hbs",
        content: `<div>
  <h1>{{@title}}</h1>
  <p>Count: {{@count}}</p>
  <p>Status: {{if @isActive "Active" "Inactive"}}</p>
</div>`
      },
      {
        name: "child.js",
        content: `import Component from '@glimmer/component'

export default class ChildComponent extends Component {
  // Arguments are accessed via @args
  get title() {
    return this.args.title
  }
  
  get count() {
    return this.args.count ?? 0
  }
  
  get isActive() {
    return this.args.isActive ?? false
  }
}`
      }
    ]
  },

  solid: {
    files: [
      {
        name: "Parent.jsx",
        content: `import ChildComponent from './ChildComponent'

function Parent() {
  const pageTitle = 'Hello World'
  const counter = 42
  const isActive = true
  
  return (
    <div>
      <ChildComponent 
        title={pageTitle}
        count={counter}
        isActive={isActive}
      />
    </div>
  )
}

export default Parent`
      },
      {
        name: "ChildComponent.tsx",
        content: `interface ChildProps {
  title: string
  count?: number
  isActive?: boolean
}

function ChildComponent(props: ChildProps) {
  const count = () => props.count ?? 0
  const isActive = () => props.isActive ?? false
  
  return (
    <div>
      <h1>{props.title}</h1>
      <p>Count: {count()}</p>
      <p>Status: {isActive() ? 'Active' : 'Inactive'}</p>
    </div>
  )
}

export default ChildComponent`
      }
    ]
  },

  alpine: `<!-- Parent Component -->
<div x-data="{
  pageTitle: 'Hello World',
  counter: 42,
  isActive: true
}">
  <!-- Child Component -->
  <div x-data="childComponent($data)">
    <h1 x-text="title"></h1>
    <p x-text="'Count: ' + count"></p>
    <p x-text="'Status: ' + (isActive ? 'Active' : 'Inactive')"></p>
  </div>
</div>

<script>
function childComponent({ pageTitle: title, counter: count = 0, isActive = false }) {
  return {
    title,
    count,
    isActive
  }
}
</script>`,
};

export const emitToParent = {
  vue2: {
    files: [
      {
        name: "Parent.vue",
        content: `<template>
  <div>
    <p>Count: {{ count }}</p>
    <ChildComponent @increment="handleIncrement" @decrement="handleDecrement" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'

export default {
  components: { ChildComponent },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    handleIncrement() {
      this.count++
    },
    handleDecrement() {
      this.count--
    }
  }
}
</script>`
      },
      {
        name: "ChildComponent.vue",
        content: `<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$emit('increment')
    },
    decrement() {
      this.$emit('decrement')
    }
  }
}
</script>`
      }
    ]
  },

  vue3: {
    files: [
      {
        name: "Parent.vue",
        content: `<template>
  <div>
    <p>Count: {{ count }}</p>
    <ChildComponent @increment="handleIncrement" @decrement="handleDecrement" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

const count = ref(0)

const handleIncrement = () => {
  count.value++
}

const handleDecrement = () => {
  count.value--
}
</script>`
      },
      {
        name: "ChildComponent.vue",
        content: `<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script setup>
const emit = defineEmits(['increment', 'decrement'])

const increment = () => {
  emit('increment')
}

const decrement = () => {
  emit('decrement')
}
</script>`
      }
    ]
  },

  react: {
    files: [
      {
        name: "Parent.jsx",
        content: `import { useState } from 'react'
import ChildComponent from './ChildComponent'

function Parent() {
  const [count, setCount] = useState(0)
  
  const handleIncrement = () => {
    setCount(count + 1)
  }
  
  const handleDecrement = () => {
    setCount(count - 1)
  }
  
  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent 
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  )
}

export default Parent`
      },
      {
        name: "ChildComponent.tsx",
        content: `interface ChildProps {
  onIncrement: () => void
  onDecrement: () => void
}

function ChildComponent({ onIncrement, onDecrement }: ChildProps) {
  return (
    <div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  )
}

export default ChildComponent`
      }
    ]
  },

  svelte4: {
    files: [
      {
        name: "Parent.svelte",
        content: `<script>
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
</div>`
      },
      {
        name: "ChildComponent.svelte",
        content: `<script>
  import { createEventDispatcher } from 'svelte'
  
  const dispatch = createEventDispatcher()
  
  function increment() {
    dispatch('increment')
  }
  
  function decrement() {
    dispatch('decrement')
  }
</script>

<div>
  <button on:click={increment}>+</button>
  <button on:click={decrement}>-</button>
</div>`
      }
    ]
  },

  svelte5: {
    files: [
      {
        name: "Parent.svelte",
        content: `<script>
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
</div>`
      },
      {
        name: "ChildComponent.svelte",
        content: `<script>
  let { onincrement, ondecrement } = $props()
</script>

<div>
  <button onclick={onincrement}>+</button>
  <button onclick={ondecrement}>-</button>
</div>`
      }
    ]
  },

  angular: `// Parent Component
import { Component } from '@angular/core'

@Component({
  selector: 'app-parent',
  template: \`
    <div>
      <p>Count: {{ count }}</p>
      <app-child 
        (increment)="handleIncrement()"
        (decrement)="handleDecrement()">
      </app-child>
    </div>
  \`
})
export class ParentComponent {
  count = 0
  
  handleIncrement() {
    this.count++
  }
  
  handleDecrement() {
    this.count--
  }
}

// Child Component
import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-child',
  template: \`
    <div>
      <button (click)="increment()">+</button>
      <button (click)="decrement()">-</button>
    </div>
  \`
})
export class ChildComponent {
  @Output() increment = new EventEmitter<void>()
  @Output() decrement = new EventEmitter<void>()
  
  onIncrement() {
    this.increment.emit()
  }
  
  onDecrement() {
    this.decrement.emit()
  }
}`,

  "angular-renaissance": `// Parent Component
import { Component, signal } from '@angular/core'

@Component({
  selector: 'app-parent',
  template: \`
    <div>
      <p>Count: {{ count() }}</p>
      <app-child 
        (increment)="handleIncrement()"
        (decrement)="handleDecrement()">
      </app-child>
    </div>
  \`
})
export class ParentComponent {
  count = signal(0)
  
  handleIncrement() {
    this.count.update(value => value + 1)
  }
  
  handleDecrement() {
    this.count.update(value => value - 1)
  }
}

// Child Component
import { Component, output } from '@angular/core'

@Component({
  selector: 'app-child',
  template: \`
    <div>
      <button (click)="onIncrement()">+</button>
      <button (click)="onDecrement()">-</button>
    </div>
  \`
})
export class ChildComponent {
  increment = output<void>()
  decrement = output<void>()
  
  onIncrement() {
    this.increment.emit()
  }
  
  onDecrement() {
    this.decrement.emit()
  }
}`,

  ember: `{{!-- Parent Component Template --}}
<div>
  <p>Count: {{this.count}}</p>
  <ChildComponent 
    @onIncrement={{this.handleIncrement}}
    @onDecrement={{this.handleDecrement}}
  />
</div>

// Parent Component Class
import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'

export default class ParentComponent extends Component {
  @tracked count = 0
  
  @action
  handleIncrement() {
    this.count++
  }
  
  @action
  handleDecrement() {
    this.count--
  }
}

{{!-- Child Component Template --}}
<div>
  <button {{on "click" this.increment}}>+</button>
  <button {{on "click" this.decrement}}>-</button>
</div>

// Child Component Class
import Component from '@glimmer/component'
import { action } from '@ember/object'

export default class ChildComponent extends Component {
  @action
  increment() {
    this.args.onIncrement?.()
  }
  
  @action
  decrement() {
    this.args.onDecrement?.()
  }
}`,

  solid: `// Parent Component
import { createSignal } from 'solid-js'
import ChildComponent from './ChildComponent'

function Parent() {
  const [count, setCount] = createSignal(0)
  
  const handleIncrement = () => {
    setCount(count() + 1)
  }
  
  const handleDecrement = () => {
    setCount(count() - 1)
  }
  
  return (
    <div>
      <p>Count: {count()}</p>
      <ChildComponent 
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  )
}

// Child Component
interface ChildProps {
  onIncrement: () => void
  onDecrement: () => void
}

function ChildComponent(props: ChildProps) {
  return (
    <div>
      <button onClick={props.onIncrement}>+</button>
      <button onClick={props.onDecrement}>-</button>
    </div>
  )
}`,

  alpine: `<div x-data="{
  count: 0,
  
  handleIncrement() {
    this.count++
  },
  
  handleDecrement() {
    this.count--
  }
}">
  <p>Count: <span x-text="count"></span></p>
  
  <!-- Child Component -->
  <div x-data="childComponent()">
    <button @click="$parent.handleIncrement()">+</button>
    <button @click="$parent.handleDecrement()">-</button>
  </div>
</div>

<script>
function childComponent() {
  return {
    // Child component logic
  }
}
</script>`,
};

export const slot = {
  vue2: {
    files: [
      {
        name: "Parent.vue",
        content: `<template>
  <div>
    <CardComponent>
      <h2>Card Title</h2>
      <p>This is the card content</p>
      <button>Action Button</button>
    </CardComponent>
  </div>
</template>

<script>
import CardComponent from './CardComponent.vue'

export default {
  components: { CardComponent }
}
</script>`
      },
      {
        name: "CardComponent.vue",
        content: `<template>
  <div class="card">
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
}
</style>`
      }
    ]
  },

  vue3: {
    files: [
      {
        name: "Parent.vue",
        content: `<template>
  <div>
    <CardComponent>
      <h2>Card Title</h2>
      <p>This is the card content</p>
      <button>Action Button</button>
    </CardComponent>
  </div>
</template>

<script setup>
import CardComponent from './CardComponent.vue'
</script>`
      },
      {
        name: "CardComponent.vue",
        content: `<template>
  <div class="card">
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
}
</style>`
      }
    ]
  },

  react: {
    files: [
      {
        name: "Parent.jsx",
        content: `import CardComponent from './CardComponent'

function Parent() {
  return (
    <div>
      <CardComponent>
        <h2>Card Title</h2>
        <p>This is the card content</p>
        <button>Action Button</button>
      </CardComponent>
    </div>
  )
}

export default Parent`
      },
      {
        name: "CardComponent.tsx",
        content: `import { ReactNode } from 'react'
import './Card.css'

interface CardProps {
  children: ReactNode
}

function CardComponent({ children }: CardProps) {
  return (
    <div className="card">
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}

export default CardComponent`
      },
      {
        name: "Card.css",
        content: `.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
}`
      }
    ]
  },

  svelte4: {
    files: [
      {
        name: "Parent.svelte",
        content: `<script>
  import CardComponent from './CardComponent.svelte'
</script>

<div>
  <CardComponent>
    <h2>Card Title</h2>
    <p>This is the card content</p>
    <button>Action Button</button>
  </CardComponent>
</div>`
      },
      {
        name: "CardComponent.svelte",
        content: `<div class="card">
  <div class="card-body">
    <slot></slot>
  </div>
</div>

<style>
  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
  }
</style>`
      }
    ]
  },

  svelte5: {
    files: [
      {
        name: "Parent.svelte",
        content: `<script>
  import CardComponent from './CardComponent.svelte'
</script>

<div>
  <CardComponent>
    <h2>Card Title</h2>
    <p>This is the card content</p>
    <button>Action Button</button>
  </CardComponent>
</div>`
      },
      {
        name: "CardComponent.svelte",
        content: `<script>
  let { children } = $props()
</script>

<div class="card">
  <div class="card-body">
    {@render children()}
  </div>
</div>

<style>
  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
  }
</style>`
      }
    ]
  },

  angular: `// Parent Component
import { Component } from '@angular/core'

@Component({
  selector: 'app-parent',
  template: \`
    <div>
      <app-card>
        <h2>Card Title</h2>
        <p>This is the card content</p>
        <button>Action Button</button>
      </app-card>
    </div>
  \`
})
export class ParentComponent {}

// Card Component
import { Component } from '@angular/core'

@Component({
  selector: 'app-card',
  template: \`
    <div class="card">
      <div class="card-body">
        <ng-content></ng-content>
      </div>
    </div>
  \`,
  styles: [\`
    .card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 16px;
    }
  \`]
})
export class CardComponent {}`,

  "angular-renaissance": `// Parent Component
import { Component } from '@angular/core'

@Component({
  selector: 'app-parent',
  template: \`
    <div>
      <app-card>
        <h2>Card Title</h2>
        <p>This is the card content</p>
        <button>Action Button</button>
      </app-card>
    </div>
  \`
})
export class ParentComponent {}

// Card Component
import { Component } from '@angular/core'

@Component({
  selector: 'app-card',
  template: \`
    <div class="card">
      <div class="card-body">
        <ng-content></ng-content>
      </div>
    </div>
  \`,
  styles: [\`
    .card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 16px;
    }
  \`],
  standalone: true
})
export class CardComponent {}`,

  ember: `{{!-- Parent Component Template --}}
<div>
  <CardComponent>
    <h2>Card Title</h2>
    <p>This is the card content</p>
    <button>Action Button</button>
  </CardComponent>
</div>

{{!-- Card Component Template --}}
<div class="card">
  <div class="card-body">
    {{yield}}
  </div>
</div>`,

  solid: `// Parent Component
import CardComponent from './CardComponent'

function Parent() {
  return (
    <div>
      <CardComponent>
        <h2>Card Title</h2>
        <p>This is the card content</p>
        <button>Action Button</button>
      </CardComponent>
    </div>
  )
}

// Card Component
import { JSX } from 'solid-js'
import './Card.css'

interface CardProps {
  children: JSX.Element
}

function CardComponent(props: CardProps) {
  return (
    <div class="card">
      <div class="card-body">
        {props.children}
      </div>
    </div>
  )
}`,

  alpine: `<div x-data="{}">
  <!-- Card Component -->
  <div class="card">
    <div class="card-body">
      <!-- Slot content -->
      <h2>Card Title</h2>
      <p>This is the card content</p>
      <button>Action Button</button>
    </div>
  </div>
</div>

<style>
  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
  }
</style>`,
};

export const slotFallback = {
  vue2: {
    files: [
      {
        name: "Parent.vue",
        content: `<template>
  <div>
    <CardComponent>
      <h2>Custom Title</h2>
      <p>Custom content provided</p>
    </CardComponent>
    
    <!-- Card without content (will show fallback) -->
    <CardComponent />
  </div>
</template>

<script>
import CardComponent from './CardComponent.vue'

export default {
  components: { CardComponent }
}
</script>`
      },
      {
        name: "CardComponent.vue",
        content: `<template>
  <div class="card">
    <div class="card-body">
      <slot>
        <!-- Fallback content -->
        <h2>Default Title</h2>
        <p>No content provided</p>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
}
</style>`
      }
    ]
  },

  vue3: {
    files: [
      {
        name: "Parent.vue",
        content: `<template>
  <div>
    <CardComponent>
      <h2>Custom Title</h2>
      <p>Custom content provided</p>
    </CardComponent>
    
    <!-- Card without content (will show fallback) -->
    <CardComponent />
  </div>
</template>

<script setup>
import CardComponent from './CardComponent.vue'
</script>`
      },
      {
        name: "CardComponent.vue",
        content: `<template>
  <div class="card">
    <div class="card-body">
      <slot>
        <!-- Fallback content -->
        <h2>Default Title</h2>
        <p>No content provided</p>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
}
</style>`
      }
    ]
  },

  react: `// Parent Component
import CardComponent from './CardComponent'

function Parent() {
  return (
    <div>
      <CardComponent>
        <h2>Custom Title</h2>
        <p>Custom content provided</p>
      </CardComponent>
      
      {/* Card without content (will show fallback) */}
      <CardComponent />
    </div>
  )
}

// Card Component with fallback
import { ReactNode } from 'react'

interface CardProps {
  children?: ReactNode
}

function CardComponent({ children }: CardProps) {
  return (
    <div className="card">
      <div className="card-body">
        {children || (
          <>
            <h2>Default Title</h2>
            <p>No content provided</p>
          </>
        )}
      </div>
    </div>
  )
}`,

  svelte4: `<!-- Parent.svelte -->
<script>
  import CardComponent from './CardComponent.svelte'
</script>

<div>
  <CardComponent>
    <h2>Custom Title</h2>
    <p>Custom content provided</p>
  </CardComponent>
  
  <!-- Card without content (will show fallback) -->
  <CardComponent />
</div>

<!-- CardComponent.svelte with fallback -->
<div class="card">
  <div class="card-body">
    <slot>
      <!-- Fallback content -->
      <h2>Default Title</h2>
      <p>No content provided</p>
    </slot>
  </div>
</div>`,

  svelte5: `<!-- Parent.svelte -->
<script>
  import CardComponent from './CardComponent.svelte'
</script>

<div>
  <CardComponent>
    <h2>Custom Title</h2>
    <p>Custom content provided</p>
  </CardComponent>
  
  <!-- Card without content (will show fallback) -->
  <CardComponent />
</div>

<!-- CardComponent.svelte with fallback -->
<script>
  let { children } = $props()
</script>

<div class="card">
  <div class="card-body">
    {#if children}
      {@render children()}
    {:else}
      <!-- Fallback content -->
      <h2>Default Title</h2>
      <p>No content provided</p>
    {/if}
  </div>
</div>`,

  angular: `// Parent Component
@Component({
  selector: 'app-parent',
  template: \`
    <div>
      <app-card>
        <h2>Custom Title</h2>
        <p>Custom content provided</p>
      </app-card>
      
      <!-- Card without content (will show fallback) -->
      <app-card></app-card>
    </div>
  \`
})
export class ParentComponent {}

// Card Component with fallback
@Component({
  selector: 'app-card',
  template: \`
    <div class="card">
      <div class="card-body">
        <ng-content select="[slot=content]">
          <!-- Fallback content -->
          <h2>Default Title</h2>
          <p>No content provided</p>
        </ng-content>
      </div>
    </div>
  \`
})
export class CardComponent {}`,

  "angular-renaissance": `// Parent Component
@Component({
  selector: 'app-parent',
  template: \`
    <div>
      <app-card>
        <h2>Custom Title</h2>
        <p>Custom content provided</p>
      </app-card>
      
      <!-- Card without content (will show fallback) -->
      <app-card></app-card>
    </div>
  \`
})
export class ParentComponent {}

// Card Component with fallback
@Component({
  selector: 'app-card',
  template: \`
    <div class="card">
      <div class="card-body">
        <ng-content>
          <!-- Fallback content -->
          <h2>Default Title</h2>
          <p>No content provided</p>
        </ng-content>
      </div>
    </div>
  \`,
  standalone: true
})
export class CardComponent {}`,

  ember: `{{!-- Parent Component Template --}}
<div>
  <CardComponent>
    <h2>Custom Title</h2>
    <p>Custom content provided</p>
  </CardComponent>
  
  {{!-- Card without content (will show fallback) --}}
  <CardComponent />
</div>

{{!-- Card Component Template with fallback --}}
<div class="card">
  <div class="card-body">
    {{#if (has-block)}}
      {{yield}}
    {{else}}
      {{!-- Fallback content --}}
      <h2>Default Title</h2>
      <p>No content provided</p>
    {{/if}}
  </div>
</div>`,

  solid: `// Parent Component
import CardComponent from './CardComponent'

function Parent() {
  return (
    <div>
      <CardComponent>
        <h2>Custom Title</h2>
        <p>Custom content provided</p>
      </CardComponent>
      
      {/* Card without content (will show fallback) */}
      <CardComponent />
    </div>
  )
}

// Card Component with fallback
import { JSX, children } from 'solid-js'

interface CardProps {
  children?: JSX.Element
}

function CardComponent(props: CardProps) {
  const content = children(() => props.children)
  
  return (
    <div class="card">
      <div class="card-body">
        {content() || (
          <>
            <h2>Default Title</h2>
            <p>No content provided</p>
          </>
        )}
      </div>
    </div>
  )
}`,

  alpine: `<div x-data="{ hasContent: false }">
  <!-- Card with content -->
  <div class="card" x-data="{ hasContent: true }">
    <div class="card-body">
      <template x-if="hasContent">
        <div>
          <h2>Custom Title</h2>
          <p>Custom content provided</p>
        </div>
      </template>
      <template x-if="!hasContent">
        <div>
          <h2>Default Title</h2>
          <p>No content provided</p>
        </div>
      </template>
    </div>
  </div>
  
  <!-- Card without content (will show fallback) -->
  <div class="card" x-data="{ hasContent: false }">
    <div class="card-body">
      <template x-if="!hasContent">
        <div>
          <h2>Default Title</h2>
          <p>No content provided</p>
        </div>
      </template>
    </div>
  </div>
</div>`,
};

export const context = {
  vue2: {
    files: [
      {
        name: "App.vue",
        content: `<template>
  <div>
    <ParentComponent />
  </div>
</template>

<script>
import ParentComponent from './ParentComponent.vue'

export default {
  components: { ParentComponent },
  provide() {
    return {
      theme: 'dark',
      user: {
        name: 'John Doe',
        role: 'admin'
      }
    }
  }
}
</script>`
      },
      {
        name: "ParentComponent.vue",
        content: `<template>
  <div>
    <ChildComponent />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'

export default {
  components: { ChildComponent }
}
</script>`
      },
      {
        name: "ChildComponent.vue",
        content: `<template>
  <div :class="theme">
    <h1>Welcome {{ user.name }}</h1>
    <p>Role: {{ user.role }}</p>
  </div>
</template>

<script>
export default {
  inject: ['theme', 'user']
}
</script>`
      }
    ]
  },

  vue3: `<!-- App.vue (Root) -->
<template>
  <div>
    <ParentComponent />
  </div>
</template>

<script setup>
import { provide, reactive } from 'vue'
import ParentComponent from './ParentComponent.vue'

provide('theme', 'dark')
provide('user', reactive({
  name: 'John Doe',
  role: 'admin'
}))
</script>

<!-- Parent Component -->
<template>
  <div>
    <ChildComponent />
  </div>
</template>

<!-- Child Component -->
<template>
  <div :class="theme">
    <h1>Welcome {{ user.name }}</h1>
    <p>Role: {{ user.role }}</p>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const theme = inject('theme')
const user = inject('user')
</script>`,

  react: `// Context definition
import { createContext, useContext, ReactNode } from 'react'

interface User {
  name: string
  role: string
}

interface AppContextType {
  theme: string
  user: User
}

const AppContext = createContext<AppContextType | undefined>(undefined)

// Provider Component
interface AppProviderProps {
  children: ReactNode
}

function AppProvider({ children }: AppProviderProps) {
  const contextValue = {
    theme: 'dark',
    user: {
      name: 'John Doe',
      role: 'admin'
    }
  }
  
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}

// Custom hook
function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider')
  }
  return context
}

// App Component
function App() {
  return (
    <AppProvider>
      <ParentComponent />
    </AppProvider>
  )
}

// Child Component
function ChildComponent() {
  const { theme, user } = useAppContext()
  
  return (
    <div className={theme}>
      <h1>Welcome {user.name}</h1>
      <p>Role: {user.role}</p>
    </div>
  )
}`,

  svelte4: `<!-- App.svelte -->
<script>
  import { setContext } from 'svelte'
  import ParentComponent from './ParentComponent.svelte'
  
  setContext('theme', 'dark')
  setContext('user', {
    name: 'John Doe',
    role: 'admin'
  })
</script>

<div>
  <ParentComponent />
</div>

<!-- ParentComponent.svelte -->
<script>
  import ChildComponent from './ChildComponent.svelte'
</script>

<div>
  <ChildComponent />
</div>

<!-- ChildComponent.svelte -->
<script>
  import { getContext } from 'svelte'
  
  const theme = getContext('theme')
  const user = getContext('user')
</script>

<div class={theme}>
  <h1>Welcome {user.name}</h1>
  <p>Role: {user.role}</p>
</div>`,

  svelte5: `<!-- App.svelte -->
<script>
  import { setContext } from 'svelte'
  import ParentComponent from './ParentComponent.svelte'
  
  const theme = $state('dark')
  const user = $state({
    name: 'John Doe',
    role: 'admin'
  })
  
  setContext('theme', () => theme)
  setContext('user', () => user)
</script>

<div>
  <ParentComponent />
</div>

<!-- ChildComponent.svelte -->
<script>
  import { getContext } from 'svelte'
  
  const getTheme = getContext('theme')
  const getUser = getContext('user')
  
  $: theme = getTheme()
  $: user = getUser()
</script>

<div class={theme}>
  <h1>Welcome {user.name}</h1>
  <p>Role: {user.role}</p>
</div>`,

  angular: `// App Service
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

interface User {
  name: string
  role: string
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private themeSubject = new BehaviorSubject<string>('dark')
  private userSubject = new BehaviorSubject<User>({
    name: 'John Doe',
    role: 'admin'
  })
  
  theme$ = this.themeSubject.asObservable()
  user$ = this.userSubject.asObservable()
  
  get theme() { return this.themeSubject.value }
  get user() { return this.userSubject.value }
}

// Child Component
import { Component } from '@angular/core'
import { AppService } from './app.service'

@Component({
  selector: 'app-child',
  template: \`
    <div [class]="appService.theme">
      <h1>Welcome {{ appService.user.name }}</h1>
      <p>Role: {{ appService.user.role }}</p>
    </div>
  \`
})
export class ChildComponent {
  constructor(public appService: AppService) {}
}`,

  "angular-renaissance": `// App Service with Signals
import { Injectable, signal } from '@angular/core'

interface User {
  name: string
  role: string
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  theme = signal('dark')
  user = signal<User>({
    name: 'John Doe',
    role: 'admin'
  })
}

// Child Component
import { Component, inject } from '@angular/core'
import { AppService } from './app.service'

@Component({
  selector: 'app-child',
  template: \`
    <div [class]="appService.theme()">
      <h1>Welcome {{ appService.user().name }}</h1>
      <p>Role: {{ appService.user().role }}</p>
    </div>
  \`,
  standalone: true
})
export class ChildComponent {
  appService = inject(AppService)
}`,

  ember: `// Application Service
import Service from '@ember/service'
import { tracked } from '@glimmer/tracking'

export default class AppService extends Service {
  @tracked theme = 'dark'
  @tracked user = {
    name: 'John Doe',
    role: 'admin'
  }
}

// Child Component
import Component from '@glimmer/component'
import { inject as service } from '@ember/service'

export default class ChildComponent extends Component {
  @service app
}

{{!-- Child Component Template --}}
<div class={{this.app.theme}}>
  <h1>Welcome {{this.app.user.name}}</h1>
  <p>Role: {{this.app.user.role}}</p>
</div>`,

  solid: `// Context definition
import { createContext, useContext, JSX } from 'solid-js'

interface User {
  name: string
  role: string
}

interface AppContextType {
  theme: string
  user: User
}

const AppContext = createContext<AppContextType>()

// Provider Component
interface AppProviderProps {
  children: JSX.Element
}

function AppProvider(props: AppProviderProps) {
  const contextValue = {
    theme: 'dark',
    user: {
      name: 'John Doe',
      role: 'admin'
    }
  }
  
  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  )
}

// Custom hook
function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider')
  }
  return context
}

// App Component
function App() {
  return (
    <AppProvider>
      <ParentComponent />
    </AppProvider>
  )
}

// Child Component
function ChildComponent() {
  const { theme, user } = useAppContext()
  
  return (
    <div class={theme}>
      <h1>Welcome {user.name}</h1>
      <p>Role: {user.role}</p>
    </div>
  )
}`,

  alpine: `<!-- App Root -->
<div x-data="{
  theme: 'dark',
  user: {
    name: 'John Doe',
    role: 'admin'
  }
}" x-id="['app-context']">
  
  <!-- Parent Component -->
  <div x-data="{}">
    <!-- Child Component (inherits context) -->
    <div :class="theme">
      <h1 x-text="'Welcome ' + user.name"></h1>
      <p x-text="'Role: ' + user.role"></p>
    </div>
  </div>
</div>

<!-- Alternative with Alpine's $store -->
<script>
document.addEventListener('alpine:init', () => {
  Alpine.store('app', {
    theme: 'dark',
    user: {
      name: 'John Doe',
      role: 'admin'
    }
  })
})
</script>

<div x-data="{}" :class="$store.app.theme">
  <h1 x-text="'Welcome ' + $store.app.user.name"></h1>
  <p x-text="'Role: ' + $store.app.user.role"></p>
</div>`,
};
