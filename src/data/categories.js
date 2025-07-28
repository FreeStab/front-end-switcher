/**
 * Category definitions with navigation structure
 */
export const categories = [
  {
    id: "reactivity",
    name: "Reactivity",
    items: [
      { id: "declare-state", name: "Declare state" },
      { id: "update-state", name: "Update state" },
      { id: "computed-state", name: "Computed state" },
    ],
  },
  {
    id: "templating",
    name: "Templating",
    items: [
      { id: "minimal-template", name: "Minimal template" },
      { id: "styling", name: "Styling" },
      { id: "loop", name: "Loop" },
      { id: "event-click", name: "Event click" },
      { id: "dom-ref", name: "Dom ref" },
      { id: "conditional", name: "Conditional" },
    ],
  },
  {
    id: "lifecycle",
    name: "Lifecycle",
    items: [
      { id: "on-mount", name: "On mount" },
      { id: "on-unmount", name: "On unmount" },
    ],
  },
  {
    id: "component-composition",
    name: "Component composition",
    items: [
      { id: "props", name: "Props" },
      { id: "emit-to-parent", name: "Emit to parent" },
      { id: "slot", name: "Slot" },
      { id: "slot-fallback", name: "Slot fallback" },
      { id: "context", name: "Context" },
    ],
  },
  {
    id: "form-input",
    name: "Form input",
    items: [
      { id: "input-text", name: "Input text" },
      { id: "checkbox", name: "Checkbox" },
      { id: "radio", name: "Radio" },
      { id: "select", name: "Select" },
    ],
  },
  {
    id: "webapp-features",
    name: "Webapp features",
    items: [
      { id: "render-app", name: "Render app" },
      { id: "fetch-data", name: "Fetch data" },
    ],
  },
  {
    id: "async-patterns",
    name: "Async & Error Handling",
    items: [
      { id: "async-await", name: "Async/Await" },
      { id: "error-boundaries", name: "Error Boundaries" },
      { id: "loading-states", name: "Loading States" },
      { id: "suspense", name: "Suspense/Lazy Loading" },
    ],
  },
];
