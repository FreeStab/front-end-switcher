import { createResource, Suspense, ErrorBoundary } from "solid-js";

async function fetchData() {
  const response = await fetch("/api/data");
  if (!response.ok) throw new Error("Failed to fetch");
  return response.json();
}

function LoadingSpinner() {
  return (
    <div class="loading-spinner">
      <div class="spinner"></div>
      <p>Loading data...</p>
    </div>
  );
}

function DataList() {
  const [data, { refetch }] = createResource(fetchData);

  return (
    <ErrorBoundary
      fallback={(err, reset) => (
        <div class="error-message">
          <p>Error: {err.message}</p>
          <button
            onClick={() => {
              reset();
              refetch();
            }}
          >
            Retry
          </button>
        </div>
      )}
    >
      <div class="data-list">
        {data()?.map((item) => (
          <div class="item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </ErrorBoundary>
  );
}

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <DataList />
    </Suspense>
  );
}

export default App;
