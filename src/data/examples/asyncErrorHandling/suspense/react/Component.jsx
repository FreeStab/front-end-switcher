import React, { Suspense, lazy } from "react";
import "./Component.module.css";

// Lazy load component
const AsyncDataComponent = lazy(() => import("./AsyncDataComponent"));

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>Loading data...</p>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AsyncDataComponent />
    </Suspense>
  );
}

export default App;
