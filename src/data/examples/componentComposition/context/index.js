// Vue 2
import vue2App from "./vue2/App.vue?raw";
import vue2Parent from "./vue2/ParentComponent.vue?raw";
import vue2Child from "./vue2/ChildComponent.vue?raw";

export const vue2 = {
  files: [
    {
      name: "App.vue",
      content: vue2App,
    },
    {
      name: "ParentComponent.vue",
      content: vue2Parent,
    },
    {
      name: "ChildComponent.vue",
      content: vue2Child,
    },
  ],
};

// For now, keep other frameworks as strings (will be organized later)
export const vue3 = `<!-- App.vue (Root) -->
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
</script>`;

export const react = `// Context definition
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
}`;

export const svelte4 = `<!-- App.svelte -->
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
</div>`;

export const svelte5 = `<!-- App.svelte -->
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
</div>`;

export const angular = `// App Service
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
}`;

export const angularRenaissance = `// App Service with Signals
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
}`;

export const ember = `// Application Service
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
</div>`;

export const solid = `// Context definition
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
}`;

export const alpine = `<!-- App Root -->
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
</div>`;
