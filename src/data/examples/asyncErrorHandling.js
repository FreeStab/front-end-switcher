// Async & Error Handling Examples
export const asyncErrorHandling = {
  "async-await": {
    vue3: `// Vue 3 - Async/Await with Composition API
<template>
  <div>
    <button @click="fetchData" :disabled="loading">
      {{ loading ? 'Loading...' : 'Fetch Data' }}
    </button>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="data">{{ data.message }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const data = ref(null)
const loading = ref(false)
const error = ref(null)

const fetchData = async () => {
  loading.value = true
  error.value = null
  
  try {
    const response = await fetch('/api/data')
    if (!response.ok) throw new Error('Failed to fetch')
    data.value = await response.json()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}
</script>`,

    vue2: `// Vue 2 - Async/Await with Options API
<template>
  <div>
    <button @click="fetchData" :disabled="loading">
      {{ loading ? 'Loading...' : 'Fetch Data' }}
    </button>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="data">{{ data.message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      loading: false,
      error: null
    }
  },
  methods: {
    async fetchData() {
      this.loading = true
      this.error = null
      
      try {
        const response = await fetch('/api/data')
        if (!response.ok) throw new Error('Failed to fetch')
        this.data = await response.json()
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    }
  }
}
</script>`,

    react: `// React - Async/Await with Hooks
import { useState } from 'react'

function AsyncComponent() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/data')
      if (!response.ok) throw new Error('Failed to fetch')
      const result = await response.json()
      setData(result)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>
      {error && <div className="error">{error}</div>}
      {data && <div>{data.message}</div>}
    </div>
  )
}`,

    svelte4: `<!-- Svelte 4 - Async/Await -->
<script>
  let data = null
  let loading = false
  let error = null

  async function fetchData() {
    loading = true
    error = null
    
    try {
      const response = await fetch('/api/data')
      if (!response.ok) throw new Error('Failed to fetch')
      data = await response.json()
    } catch (err) {
      error = err.message
    } finally {
      loading = false
    }
  }
</script>

<button on:click={fetchData} disabled={loading}>
  {loading ? 'Loading...' : 'Fetch Data'}
</button>

{#if error}
  <div class="error">{error}</div>
{/if}

{#if data}
  <div>{data.message}</div>
{/if}`,

    svelte5: `<!-- Svelte 5 - Async/Await with Runes -->
<script>
  let data = $state(null)
  let loading = $state(false)
  let error = $state(null)

  async function fetchData() {
    loading = true
    error = null
    
    try {
      const response = await fetch('/api/data')
      if (!response.ok) throw new Error('Failed to fetch')
      data = await response.json()
    } catch (err) {
      error = err.message
    } finally {
      loading = false
    }
  }
</script>

<button onclick={fetchData} disabled={loading}>
  {loading ? 'Loading...' : 'Fetch Data'}
</button>

{#if error}
  <div class="error">{error}</div>
{/if}

{#if data}
  <div>{data.message}</div>
{/if}`,

    angular: `// Angular - Async/Await with RxJS
import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError, finalize } from 'rxjs/operators'
import { of } from 'rxjs'

@Component({
  selector: 'app-async',
  template: \`
    <button (click)="fetchData()" [disabled]="loading">
      {{ loading ? 'Loading...' : 'Fetch Data' }}
    </button>
    <div *ngIf="error" class="error">{{ error }}</div>
    <div *ngIf="data">{{ data.message }}</div>
  \`
})
export class AsyncComponent {
  data: any = null
  loading = false
  error: string | null = null

  constructor(private http: HttpClient) {}

  async fetchData() {
    this.loading = true
    this.error = null

    try {
      this.data = await this.http.get('/api/data').toPromise()
    } catch (err: any) {
      this.error = err.message
    } finally {
      this.loading = false
    }
  }
}`,

    solid: `// Solid.js - Async/Await with Signals
import { createSignal } from 'solid-js'

function AsyncComponent() {
  const [data, setData] = createSignal(null)
  const [loading, setLoading] = createSignal(false)
  const [error, setError] = createSignal(null)

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/data')
      if (!response.ok) throw new Error('Failed to fetch')
      const result = await response.json()
      setData(result)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button onClick={fetchData} disabled={loading()}>
        {loading() ? 'Loading...' : 'Fetch Data'}
      </button>
      {error() && <div class="error">{error()}</div>}
      {data() && <div>{data().message}</div>}
    </div>
  )
}`,

    alpine: `<!-- Alpine.js - Async/Await -->
<div x-data="{
  data: null,
  loading: false,
  error: null,
  async fetchData() {
    this.loading = true
    this.error = null
    
    try {
      const response = await fetch('/api/data')
      if (!response.ok) throw new Error('Failed to fetch')
      this.data = await response.json()
    } catch (err) {
      this.error = err.message
    } finally {
      this.loading = false
    }
  }
}">
  <button @click="fetchData()" :disabled="loading">
    <span x-text="loading ? 'Loading...' : 'Fetch Data'"></span>
  </button>
  
  <div x-show="error" class="error" x-text="error"></div>
  <div x-show="data" x-text="data?.message"></div>
</div>`,
  },

  "error-boundaries": {
    vue3: `// Vue 3 - Error Boundary with Global Error Handler
// main.js
const app = createApp(App)

app.config.errorHandler = (err, vm, info) => {
  console.error('Global error:', err, info)
  // Send to error reporting service
}

// ErrorBoundary.vue
<template>
  <div v-if="hasError" class="error-boundary">
    <h2>Something went wrong</h2>
    <p>{{ errorMessage }}</p>
    <button @click="retry">Try Again</button>
  </div>
  <slot v-else />
</template>

<script setup>
import { ref, onErrorCaptured } from 'vue'

const hasError = ref(false)
const errorMessage = ref('')

const retry = () => {
  hasError.value = false
  errorMessage.value = ''
}

onErrorCaptured((err) => {
  hasError.value = true
  errorMessage.value = err.message
  return false // Prevent error from propagating
})
</script>`,

    react: `// React - Error Boundary Class Component
import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error boundary caught:', error, errorInfo)
    // Send to error reporting service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>{this.state.error?.message}</p>
          <button onClick={() => this.setState({ hasError: false, error: null })}>
            Try Again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

// Usage
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>`,

    svelte4: `<!-- Svelte 4 - Error Handling with Store -->
<!-- errorStore.js -->
import { writable } from 'svelte/store'

export const errorStore = writable(null)

export function handleError(error) {
  console.error('Error occurred:', error)
  errorStore.set(error.message)
  // Send to error reporting service
}

<!-- ErrorBoundary.svelte -->
<script>
  import { errorStore, handleError } from './errorStore.js'
  
  let hasError = false
  let errorMessage = ''

  $: if ($errorStore) {
    hasError = true
    errorMessage = $errorStore
  }

  function retry() {
    hasError = false
    errorMessage = ''
    errorStore.set(null)
  }

  // Catch unhandled promise rejections
  if (typeof window !== 'undefined') {
    window.addEventListener('unhandledrejection', (event) => {
      handleError(event.reason)
    })
  }
</script>

{#if hasError}
  <div class="error-boundary">
    <h2>Something went wrong</h2>
    <p>{errorMessage}</p>
    <button on:click={retry}>Try Again</button>
  </div>
{:else}
  <slot />
{/if}`,

    angular: `// Angular - Global Error Handler
import { Injectable, ErrorHandler } from '@angular/core'

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.error('Global error:', error)
    // Send to error reporting service
  }
}

// app.module.ts
import { NgModule, ErrorHandler } from '@angular/core'

@NgModule({
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ]
})
export class AppModule {}

// Error Boundary Service
@Injectable({ providedIn: 'root' })
export class ErrorBoundaryService {
  private errorSubject = new BehaviorSubject<string | null>(null)
  error$ = this.errorSubject.asObservable()

  handleError(error: Error) {
    this.errorSubject.next(error.message)
  }

  clearError() {
    this.errorSubject.next(null)
  }
}`,

    solid: `// Solid.js - Error Boundary
import { ErrorBoundary, createSignal } from 'solid-js'

function MyErrorBoundary(props) {
  const [error, setError] = createSignal()

  return (
    <ErrorBoundary
      fallback={(err, reset) => (
        <div class="error-boundary">
          <h2>Something went wrong</h2>
          <p>{err.message}</p>
          <button onClick={reset}>Try Again</button>
        </div>
      )}
    >
      {props.children}
    </ErrorBoundary>
  )
}

// Usage
<MyErrorBoundary>
  <MyComponent />
</MyErrorBoundary>`,

    alpine: `<!-- Alpine.js - Error Handling -->
<div x-data="{
  hasError: false,
  errorMessage: '',
  handleError(error) {
    this.hasError = true
    this.errorMessage = error.message
    console.error('Error occurred:', error)
  },
  retry() {
    this.hasError = false
    this.errorMessage = ''
  }
}" 
x-init="
  window.addEventListener('error', (event) => handleError(event.error))
  window.addEventListener('unhandledrejection', (event) => handleError(event.reason))
">
  <div x-show="hasError" class="error-boundary">
    <h2>Something went wrong</h2>
    <p x-text="errorMessage"></p>
    <button @click="retry()">Try Again</button>
  </div>
  
  <div x-show="!hasError">
    <!-- Your app content -->
    <slot></slot>
  </div>
</div>`,
  },

  "loading-states": {
    vue3: `<template>
  <div>
    <!-- Skeleton Loading -->
    <div v-if="loading" class="skeleton-container">
      <div class="skeleton-item" v-for="n in 3" :key="n">
        <div class="skeleton-avatar"></div>
        <div class="skeleton-content">
          <div class="skeleton-line skeleton-line-title"></div>
          <div class="skeleton-line skeleton-line-text"></div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div v-else-if="data" class="content">
      <div v-for="item in data" :key="item.id" class="item">
        <img :src="item.avatar" class="avatar" />
        <div class="content">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="error-state">
      <p>{{ error }}</p>
      <button @click="retry">Retry</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const data = ref(null)
const loading = ref(true)
const error = ref(null)

const fetchData = async () => {
  loading.value = true
  error.value = null
  
  try {
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate delay
    const response = await fetch('/api/items')
    if (!response.ok) throw new Error('Failed to load')
    data.value = await response.json()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

const retry = () => fetchData()

onMounted(() => fetchData())
</script>`,

    react: `// React - Loading States with Suspense
import { useState, useEffect, Suspense } from 'react'

function LoadingSkeleton() {
  return (
    <div className="skeleton-container">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="skeleton-item">
          <div className="skeleton-avatar"></div>
          <div className="skeleton-content">
            <div className="skeleton-line skeleton-line-title"></div>
            <div className="skeleton-line skeleton-line-text"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

function DataComponent() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      const response = await fetch('/api/items')
      if (!response.ok) throw new Error('Failed to load')
      setData(await response.json())
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) return <LoadingSkeleton />
  if (error) return (
    <div className="error-state">
      <p>{error}</p>
      <button onClick={fetchData}>Retry</button>
    </div>
  )

  return (
    <div className="content">
      {data?.map(item => (
        <div key={item.id} className="item">
          <img src={item.avatar} className="avatar" />
          <div className="content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}`,

    svelte4: `<!-- Svelte 4 - Loading States -->
<script>
  import { onMount } from 'svelte'
  
  let data = null
  let loading = true
  let error = null

  async function fetchData() {
    loading = true
    error = null
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      const response = await fetch('/api/items')
      if (!response.ok) throw new Error('Failed to load')
      data = await response.json()
    } catch (err) {
      error = err.message
    } finally {
      loading = false
    }
  }

  onMount(() => fetchData())
</script>

{#if loading}
  <div class="skeleton-container">
    {#each Array(3) as _, i}
      <div class="skeleton-item">
        <div class="skeleton-avatar"></div>
        <div class="skeleton-content">
          <div class="skeleton-line skeleton-line-title"></div>
          <div class="skeleton-line skeleton-line-text"></div>
        </div>
      </div>
    {/each}
  </div>
{:else if error}
  <div class="error-state">
    <p>{error}</p>
    <button on:click={fetchData}>Retry</button>
  </div>
{:else if data}
  <div class="content">
    {#each data as item (item.id)}
      <div class="item">
        <img src={item.avatar} class="avatar" alt="" />
        <div class="content">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    {/each}
  </div>
{/if}`,

    angular: `// Angular - Loading States with Observables
import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { catchError, delay, map, startWith } from 'rxjs/operators'

interface LoadingState<T> {
  loading: boolean
  data: T | null
  error: string | null
}

@Component({
  selector: 'app-loading',
  template: \`
    <div *ngIf="state$ | async as state">
      <!-- Loading Skeleton -->
      <div *ngIf="state.loading" class="skeleton-container">
        <div *ngFor="let item of [1,2,3]" class="skeleton-item">
          <div class="skeleton-avatar"></div>
          <div class="skeleton-content">
            <div class="skeleton-line skeleton-line-title"></div>
            <div class="skeleton-line skeleton-line-text"></div>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div *ngIf="state.error" class="error-state">
        <p>{{ state.error }}</p>
        <button (click)="retry()">Retry</button>
      </div>

      <!-- Content -->
      <div *ngIf="state.data" class="content">
        <div *ngFor="let item of state.data" class="item">
          <img [src]="item.avatar" class="avatar" />
          <div class="content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  \`
})
export class LoadingComponent implements OnInit {
  state$: Observable<LoadingState<any[]>>

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.state$ = this.http.get<any[]>('/api/items').pipe(
      delay(2000), // Simulate network delay
      map(data => ({ loading: false, data, error: null })),
      catchError(error => of({ loading: false, data: null, error: error.message })),
      startWith({ loading: true, data: null, error: null })
    )
  }

  retry() {
    this.loadData()
  }
}`,

    solid: `// Solid.js - Loading States with Resources
import { createResource, Suspense, ErrorBoundary } from 'solid-js'

function LoadingSkeleton() {
  return (
    <div class="skeleton-container">
      {[...Array(3)].map((_, i) => (
        <div class="skeleton-item">
          <div class="skeleton-avatar"></div>
          <div class="skeleton-content">
            <div class="skeleton-line skeleton-line-title"></div>
            <div class="skeleton-line skeleton-line-text"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

async function fetchItems() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  const response = await fetch('/api/items')
  if (!response.ok) throw new Error('Failed to load')
  return response.json()
}

function DataComponent() {
  const [data, { refetch }] = createResource(fetchItems)

  return (
    <ErrorBoundary fallback={(err, reset) => (
      <div class="error-state">
        <p>{err.message}</p>
        <button onClick={reset}>Retry</button>
      </div>
    )}>
      <Suspense fallback={<LoadingSkeleton />}>
        <div class="content">
          {data()?.map(item => (
            <div class="item">
              <img src={item.avatar} class="avatar" />
              <div class="content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Suspense>
    </ErrorBoundary>
  )
}`,

    alpine: `<!-- Alpine.js - Loading States -->
<div x-data="{
  data: null,
  loading: true,
  error: null,
  async fetchData() {
    this.loading = true
    this.error = null
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      const response = await fetch('/api/items')
      if (!response.ok) throw new Error('Failed to load')
      this.data = await response.json()
    } catch (err) {
      this.error = err.message
    } finally {
      this.loading = false
    }
  }
}" 
x-init="fetchData()">

  <!-- Loading Skeleton -->
  <div x-show="loading" class="skeleton-container">
    <template x-for="i in 3" :key="i">
      <div class="skeleton-item">
        <div class="skeleton-avatar"></div>
        <div class="skeleton-content">
          <div class="skeleton-line skeleton-line-title"></div>
          <div class="skeleton-line skeleton-line-text"></div>
        </div>
      </div>
    </template>
  </div>

  <!-- Error State -->
  <div x-show="error" class="error-state">
    <p x-text="error"></p>
    <button @click="fetchData()">Retry</button>
  </div>

  <!-- Content -->
  <div x-show="data && !loading" class="content">
    <template x-for="item in data" :key="item.id">
      <div class="item">
        <img :src="item.avatar" class="avatar" />
        <div class="content">
          <h3 x-text="item.title"></h3>
          <p x-text="item.description"></p>
        </div>
      </div>
    </template>
  </div>
</div>`,
  },

  suspense: {
    vue3: `// Vue 3 - Suspense Component
<template>
  <Suspense>
    <!-- Default slot: actual component -->
    <template #default>
      <AsyncDataComponent />
    </template>
    
    <!-- Fallback slot: loading state -->
    <template #fallback>
      <div class="loading-spinner">
        <div class="spinner"></div>
        <p>Loading data...</p>
      </div>
    </template>
  </Suspense>
</template>

<script setup>
import { Suspense } from 'vue'
import AsyncDataComponent from './AsyncDataComponent.vue'
</script>

<!-- AsyncDataComponent.vue -->
<template>
  <div class="data-list">
    <div v-for="item in data" :key="item.id" class="item">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// This will trigger Suspense
const data = await fetch('/api/data').then(res => {
  if (!res.ok) throw new Error('Failed to fetch')
  return res.json()
})
</script>`,

    react: `// React - Suspense with React.lazy
import React, { Suspense, lazy } from 'react'

// Lazy load component
const AsyncDataComponent = lazy(() => import('./AsyncDataComponent'))

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>Loading data...</p>
    </div>
  )
}

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AsyncDataComponent />
    </Suspense>
  )
}

// AsyncDataComponent.jsx
import { useState, useEffect } from 'react'

function AsyncDataComponent() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/api/data')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json()
      })
      .then(setData)
  }, [])

  return (
    <div className="data-list">
      {data.map(item => (
        <div key={item.id} className="item">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default AsyncDataComponent`,

    svelte4: `<!-- Svelte 4 - Async Blocks -->
<script>
  async function fetchData() {
    const response = await fetch('/api/data')
    if (!response.ok) throw new Error('Failed to fetch')
    return response.json()
  }

  let dataPromise = fetchData()
</script>

{#await dataPromise}
  <div class="loading-spinner">
    <div class="spinner"></div>
    <p>Loading data...</p>
  </div>
{:then data}
  <div class="data-list">
    {#each data as item (item.id)}
      <div class="item">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    {/each}
  </div>
{:catch error}
  <div class="error-message">
    <p>Error: {error.message}</p>
    <button on:click={() => dataPromise = fetchData()}>
      Retry
    </button>
  </div>
{/await}`,

    svelte5: `<!-- Svelte 5 - Async with Runes -->
<script>
  let data = $state([])
  let loading = $state(true)
  let error = $state(null)

  async function fetchData() {
    loading = true
    error = null
    
    try {
      const response = await fetch('/api/data')
      if (!response.ok) throw new Error('Failed to fetch')
      data = await response.json()
    } catch (err) {
      error = err
    } finally {
      loading = false
    }
  }

  // Auto-fetch on component mount
  $effect(() => {
    fetchData()
  })
</script>

{#if loading}
  <div class="loading-spinner">
    <div class="spinner"></div>
    <p>Loading data...</p>
  </div>
{:else if error}
  <div class="error-message">
    <p>Error: {error.message}</p>
    <button onclick={() => fetchData()}>Retry</button>
  </div>
{:else}
  <div class="data-list">
    {#each data as item (item.id)}
      <div class="item">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    {/each}
  </div>
{/if}`,

    angular: `// Angular - Async Pipe with Observables
import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { catchError, map, startWith } from 'rxjs/operators'

interface AsyncState<T> {
  loading: boolean
  data: T | null
  error: Error | null
}

@Component({
  selector: 'app-suspense',
  template: \`
    <div *ngIf="state$ | async as state">
      <!-- Loading State -->
      <div *ngIf="state.loading" class="loading-spinner">
        <div class="spinner"></div>
        <p>Loading data...</p>
      </div>

      <!-- Error State -->
      <div *ngIf="state.error" class="error-message">
        <p>Error: {{ state.error.message }}</p>
        <button (click)="retry()">Retry</button>
      </div>

      <!-- Success State -->
      <div *ngIf="state.data" class="data-list">
        <div *ngFor="let item of state.data" class="item">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  \`
})
export class SuspenseComponent implements OnInit {
  state$: Observable<AsyncState<any[]>>

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.state$ = this.http.get<any[]>('/api/data').pipe(
      map(data => ({ loading: false, data, error: null })),
      catchError(error => of({ loading: false, data: null, error })),
      startWith({ loading: true, data: null, error: null })
    )
  }

  retry() {
    this.loadData()
  }
}`,

    solid: `// Solid.js - Suspense with Resources
import { createResource, Suspense, ErrorBoundary } from 'solid-js'

async function fetchData() {
  const response = await fetch('/api/data')
  if (!response.ok) throw new Error('Failed to fetch')
  return response.json()
}

function LoadingSpinner() {
  return (
    <div class="loading-spinner">
      <div class="spinner"></div>
      <p>Loading data...</p>
    </div>
  )
}

function DataList() {
  const [data, { refetch }] = createResource(fetchData)

  return (
    <ErrorBoundary
      fallback={(err, reset) => (
        <div class="error-message">
          <p>Error: {err.message}</p>
          <button onClick={() => { reset(); refetch() }}>
            Retry
          </button>
        </div>
      )}
    >
      <div class="data-list">
        {data()?.map(item => (
          <div class="item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </ErrorBoundary>
  )
}

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <DataList />
    </Suspense>
  )
}`,

    alpine: `<!-- Alpine.js - Manual Suspense Pattern -->
<div x-data="{
  data: null,
  loading: true,
  error: null,
  
  async fetchData() {
    this.loading = true
    this.error = null
    
    try {
      const response = await fetch('/api/data')
      if (!response.ok) throw new Error('Failed to fetch')
      this.data = await response.json()
    } catch (err) {
      this.error = err
    } finally {
      this.loading = false
    }
  },
  
  retry() {
    this.fetchData()
  }
}" 
x-init="fetchData()">

  <!-- Loading State -->
  <div x-show="loading" class="loading-spinner">
    <div class="spinner"></div>
    <p>Loading data...</p>
  </div>

  <!-- Error State -->
  <div x-show="error" class="error-message">
    <p>Error: <span x-text="error?.message"></span></p>
    <button @click="retry()">Retry</button>
  </div>

  <!-- Success State -->
  <div x-show="data && !loading" class="data-list">
    <template x-for="item in data" :key="item.id">
      <div class="item">
        <h3 x-text="item.title"></h3>
        <p x-text="item.description"></p>
      </div>
    </template>
  </div>
</div>`,
  },
};
