# Example File Structure

This directory contains code examples organized by example type, with each example having its own folder containing files with proper extensions for each framework.

## Structure

```
examples/
├── minimalTemplate/          # Basic template example
│   ├── index.js             # Exports all framework files
│   ├── vue2.vue             # Vue 2 component
│   ├── vue3.vue             # Vue 3 component
│   ├── react.jsx            # React component
│   ├── svelte4.svelte       # Svelte 4 component
│   ├── svelte5.svelte       # Svelte 5 component
│   ├── angular.ts           # Angular component
│   ├── angular-renaissance.ts # Angular Renaissance component
│   ├── ember.hbs            # Ember template
│   ├── solid.jsx            # SolidJS component
│   └── alpine.html          # Alpine.js markup
├── emitToParent/             # Parent-child communication example
│   ├── index.js             # Exports all framework files (with tabs support)
│   ├── vue2/                # Vue 2 components folder
│   │   ├── Parent.vue       # Vue 2 Parent component
│   │   └── ChildComponent.vue # Vue 2 Child component
│   ├── vue3/                # Vue 3 components folder
│   │   ├── Parent.vue       # Vue 3 Parent component
│   │   └── ChildComponent.vue # Vue 3 Child component
│   ├── react/               # React components folder
│   │   ├── Parent.jsx       # React Parent component
│   │   └── ChildComponent.jsx # React Child component
│   ├── svelte4/             # Svelte 4 components folder
│   │   ├── Parent.svelte    # Svelte 4 Parent component
│   │   └── ChildComponent.svelte # Svelte 4 Child component
│   ├── svelte5/             # Svelte 5 components folder
│   │   ├── Parent.svelte    # Svelte 5 Parent component
│   │   └── ChildComponent.svelte # Svelte 5 Child component
│   ├── angular/             # Angular components folder
│   │   ├── parent.component.ts # Angular Parent component
│   │   └── child.component.ts # Angular Child component
│   ├── angular-renaissance/ # Angular Renaissance components folder
│   │   ├── parent.component.ts # Angular Renaissance Parent component
│   │   └── child.component.ts # Angular Renaissance Child component
│   ├── ember/               # Ember components folder
│   │   ├── parent.hbs       # Ember Parent template
│   │   ├── parent.js        # Ember Parent component
│   │   ├── child.hbs        # Ember Child template
│   │   └── child.js         # Ember Child component
│   ├── solid/               # SolidJS components folder
│   │   ├── Parent.jsx       # SolidJS Parent component
│   │   └── ChildComponent.jsx # SolidJS Child component
│   ├── alpine/              # Alpine.js components folder
│   │   ├── Parent.html      # Alpine.js Parent component
│   │   └── ChildComponent.html # Alpine.js Child component
│   └── [deprecated files]   # Old combined files (use folders instead)
└── FILE_STRUCTURE.md         # This file
```

## Framework Extensions

- **Vue**: `.vue`
- **React**: `.jsx`
- **Svelte**: `.svelte`
- **Angular**: `.ts`
- **Ember**: `.hbs`
- **SolidJS**: `.jsx`
- **Alpine**: `.html`

## Migration Process

To migrate an existing example from the old JavaScript object format to the new file-based structure:

1. Create a new folder in `examples/` with the example name
2. Create individual files for each framework with proper extensions
3. Copy the code from the JavaScript object to the respective files
4. Create an `index.js` file that imports all files using `?raw` suffix
5. Update the main example file to import from the new structure

## Migrated Examples

✅ **minimalTemplate** - Basic "Hello World" templates  
✅ **emitToParent** - Parent-child component communication

## Remaining Examples to Migrate

- **props** - Component property passing
- **slot** - Content projection/slots
- **slotFallback** - Slots with fallback content
- **context** - Context/dependency injection

## Benefits

- **Better IDE Support**: Proper syntax highlighting and IntelliSense
- **Framework-specific Features**: Linting, formatting, and validation
- **Easier Maintenance**: Each framework's code is in its own file
- **Version Control**: Better diff tracking for individual framework changes
- **Tabbed Display**: Multi-file examples can be displayed in separate tabs for better organization

## Tabbed Display Structure

For examples with multiple components, the index.js exports a `files` array:

```javascript
export const vue3 = {
  files: [
    {
      name: "Parent.vue",
      content: parentContent,
    },
    {
      name: "ChildComponent.vue",
      content: childContent,
    },
  ],
};
```

This allows the UI to display each file in its own tab, making it easier to understand component relationships and structure.

## Organized Folder Structure

For complex examples with multiple components, each framework can have its own dedicated folder:

```
emitToParent/
├── vue2/
│   ├── Parent.vue
│   └── ChildComponent.vue
├── vue3/
│   ├── Parent.vue
│   └── ChildComponent.vue
├── react/
│   ├── Parent.jsx
│   └── ChildComponent.jsx
├── svelte4/
│   ├── Parent.svelte
│   └── ChildComponent.svelte
├── angular/
│   ├── parent.component.ts
│   └── child.component.ts
├── ember/
│   ├── parent.hbs
│   ├── parent.js
│   ├── child.hbs
│   └── child.js
├── solid/
│   ├── Parent.jsx
│   └── ChildComponent.jsx
├── alpine/
│   ├── Parent.html
│   └── ChildComponent.html
└── index.js
```

This approach provides:

- **Better Organization**: Related components are grouped together
- **Cleaner Structure**: No naming conflicts between frameworks
- **Scalability**: Easy to add more components per framework
- **Maintainability**: Framework-specific components are isolated
