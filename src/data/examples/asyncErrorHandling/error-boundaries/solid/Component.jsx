import { ErrorBoundary } from "solid-js";

function MyErrorBoundary(props) {
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
  );
}

// Usage example:
function App() {
  return (
    <MyErrorBoundary>
      <MyComponent />
    </MyErrorBoundary>
  );
}

export default MyErrorBoundary;
