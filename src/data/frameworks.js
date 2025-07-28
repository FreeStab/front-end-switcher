/**
 * Framework configurations including display names, IDs, and brand colors
 */
export const frameworks = [
  { id: "vue2", name: "Vue 2", color: "#4FC08D" },
  { id: "vue3", name: "Vue 3", color: "#4FC08D" },
  { id: "react", name: "React", color: "#61DAFB" },
  { id: "svelte4", name: "Svelte 4", color: "#FF3E00" },
  { id: "svelte5", name: "Svelte 5", color: "#FF3E00" },
  { id: "angular", name: "Angular", color: "#DD0031" },
  { id: "angular-renaissance", name: "Angular Renaissance", color: "#DD0031" },
  { id: "ember", name: "Ember", color: "#E04E39" },
  { id: "solid", name: "Solid.js", color: "#2c4f7c" },
  { id: "alpine", name: "Alpine", color: "#8BC34A" },
];

/**
 * Language mapping for syntax highlighting
 */
export const frameworkLanguages = {
  vue2: "vue",
  vue3: "vue",
  react: "jsx",
  svelte4: "svelte",
  svelte5: "svelte",
  angular: "typescript",
  "angular-renaissance": "typescript",
  ember: "handlebars",
  solid: "jsx",
  alpine: "html",
};
