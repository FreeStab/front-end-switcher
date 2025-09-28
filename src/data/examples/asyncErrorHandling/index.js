// Import organized examples
import { asyncAwait } from "./async-await/index.js";
import { errorBoundaries } from "./error-boundaries/index.js";
import { loadingStates } from "./loading-states/index.js";
import { suspense } from "./suspense/index.js";

export const asyncErrorHandling = {
  "async-await": asyncAwait,
  "error-boundaries": errorBoundaries,
  "loading-states": loadingStates,
  suspense: suspense,
};
