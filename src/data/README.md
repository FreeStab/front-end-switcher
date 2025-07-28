# Data Structure Documentation

This directory contains the refactored code examples organized into a modular, maintainable structure.

## Structure Overview

```
src/data/
├── index.js              # Main entry point and aggregator
├── frameworks.js         # Framework configurations and metadata
├── categories.js         # Navigation categories and structure
└── examples/            # Individual example implementations
    ├── reactivity.js    # State management examples
    ├── templating.js    # Template and UI examples
    ├── lifecycle.js     # Component lifecycle examples
    └── componentComposition.js  # Component communication examples
```

## Files Description

### `index.js`

- **Purpose**: Main entry point that aggregates all examples
- **Exports**: `frameworks`, `categories`, `codeExamples`, `frameworkLanguages`
- **Utilities**: Helper functions for example management

### `frameworks.js`

- **Purpose**: Framework metadata and configuration
- **Contains**: Framework names, IDs, brand colors, and language mappings
- **Easy to extend**: Add new frameworks by updating the arrays

### `categories.js`

- **Purpose**: Navigation structure and example organization
- **Contains**: Category definitions with their respective example items
- **Maintainable**: Easy to add new categories or reorganize existing ones

### `examples/` Directory

Each file in this directory represents a category of examples:

#### `reactivity.js`

- State declaration (`declareState`)
- State updates (`updateState`)
- Computed values (`computedState`)

#### `templating.js`

- Basic templates (`minimalTemplate`)
- Styling patterns (`styling`)
- List rendering (`loop`)

#### `componentComposition.js`

- Component properties (`props`)
- Parent-child communication (`emitToParent`)
- Content projection (`slot`)
- Default slot content (`slotFallback`)
- Context/dependency injection (`context`)

## Benefits of This Structure

### 1. **Modularity**

- Each category is in its own file
- Easy to find and edit specific examples
- Reduced cognitive load when working on specific areas

### 2. **Maintainability**

- Clear separation of concerns
- Consistent naming conventions
- Easy to add new examples or frameworks

### 3. **Scalability**

- Simple to add new categories
- Framework definitions centralized
- Utilities for example management

### 4. **Developer Experience**

- Smaller files are easier to navigate
- Clear import structure
- Self-documenting organization

## Adding New Examples

### 1. Add to Existing Category

```javascript
// In examples/reactivity.js
export const newExample = {
  vue3: `...code...`,
  react: `...code...`,
  // ... other frameworks
};
```

### 2. Create New Category

1. Create new file: `examples/new-category.js`
2. Export example objects
3. Import in `index.js`
4. Add to `codeExamples` object
5. Update `categories.js` with navigation structure

### 3. Add New Framework

1. Add to `frameworks` array in `frameworks.js`
2. Add language mapping in `frameworkLanguages`
3. Add implementations across all example files

## Import Usage

```javascript
// Import everything
import { frameworks, categories, codeExamples } from "./data/index.js";

// Import specific utilities
import { getExample, hasExample } from "./data/index.js";

// Import framework metadata
import { frameworkLanguages } from "./data/frameworks.js";
```

## Example Object Structure

```javascript
export const exampleName = {
  vue2: `<!-- Vue 2 implementation -->`,
  vue3: `<!-- Vue 3 implementation -->`,
  react: `// React implementation`,
  svelte4: `<!-- Svelte 4 implementation -->`,
  svelte5: `<!-- Svelte 5 implementation -->`,
  angular: `// Angular implementation`,
  "angular-renaissance": `// Angular Renaissance implementation`,
  ember: `{{!-- Ember implementation --}}`,
  solid: `// Solid.js implementation`,
  alpine: `<!-- Alpine.js implementation -->`,
};
```

## TODO: Remaining Examples to Implement

The following examples are planned but not yet implemented:

### Templating

- `event-click`: Event handling patterns
- `dom-ref`: DOM element references
- `conditional`: Conditional rendering

### Form Input

- `input-text`: Text input binding
- `checkbox`: Checkbox handling
- `radio`: Radio button groups
- `select`: Select/dropdown components

### Webapp Features

- `render-app`: Application bootstrapping
- `fetch-data`: Data fetching patterns

Each of these can be implemented by following the existing patterns in the current example files.
