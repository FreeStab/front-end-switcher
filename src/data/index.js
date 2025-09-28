/**
 * Main code examples aggregator
 * Imports all example categories and creates the unified codeExamples object
 */

// Import frameworks and categories
export { frameworks, frameworkLanguages } from "./frameworks.js";
export { categories } from "./categories.js";

// Import example categories
import {
  declareState,
  updateState,
  computedState,
} from "./examples/reactivity/index.js";

import {
  minimalTemplate,
  styling,
  loop,
  eventClick,
  domRef,
  conditional,
} from "./examples/templating/index.js";

import { onMount, onUnmount } from "./examples/lifecycle/index.js";

import {
  props,
  emitToParent,
  slot,
  slotFallback,
  context,
} from "./examples/componentComposition/index.js";

import { asyncErrorHandling } from "./examples/asyncErrorHandling/index.js";

import {
  inputText,
  checkbox,
  radio,
  selectDropdown,
} from "./examples/formInputs/index.js";

/**
 * Unified code examples object
 * Maps example IDs to framework implementations
 */
export const codeExamples = {
  // Reactivity examples
  "declare-state": declareState,
  "update-state": updateState,
  "computed-state": computedState,

  // Templating examples
  "minimal-template": minimalTemplate,
  styling: styling,
  loop: loop,
  "event-click": eventClick,
  "dom-ref": domRef,
  conditional: conditional,

  // Lifecycle examples
  "on-mount": onMount,
  "on-unmount": onUnmount,

  // Component composition examples
  props: props,
  "emit-to-parent": emitToParent,
  slot: slot,
  "slot-fallback": slotFallback,
  context: context,

  // Async & Error Handling examples
  "async-await": asyncErrorHandling["async-await"],
  "error-boundaries": asyncErrorHandling["error-boundaries"],
  "loading-states": asyncErrorHandling["loading-states"],
  suspense: asyncErrorHandling["suspense"],

  // Form Input examples
  "input-text": inputText,
  checkbox: checkbox,
  radio: radio,
  select: selectDropdown,

  // TODO: Add remaining examples
  // These can be implemented incrementally:
  // - event-click
  // - dom-ref
  // - conditional
  // - input-text
  // - checkbox
  // - radio
  // - select
  // - render-app
  // - fetch-data
};

/**
 * Utility function to get example by ID
 * @param {string} exampleId - The example ID to retrieve
 * @returns {Object|null} The example object or null if not found
 */
export function getExample(exampleId) {
  return codeExamples[exampleId] || null;
}

/**
 * Utility function to get all example IDs
 * @returns {string[]} Array of all available example IDs
 */
export function getExampleIds() {
  return Object.keys(codeExamples);
}

/**
 * Utility function to check if an example exists
 * @param {string} exampleId - The example ID to check
 * @returns {boolean} True if the example exists
 */
export function hasExample(exampleId) {
  return exampleId in codeExamples;
}
