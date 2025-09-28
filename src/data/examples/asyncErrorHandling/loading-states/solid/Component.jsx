import { createResource, Suspense, ErrorBoundary, For } from "solid-js";

function LoadingSkeleton() {
  return (
    <div class="skeleton-container">
      <For each={[1, 2, 3]}>
        {() => (
          <div class="skeleton-item">
            <div class="skeleton-avatar"></div>
            <div class="skeleton-content">
              <div class="skeleton-line skeleton-line-title"></div>
              <div class="skeleton-line skeleton-line-text"></div>
            </div>
          </div>
        )}
      </For>
    </div>
  );
}

async function fetchItems() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("/api/items");
  if (!response.ok) throw new Error("Failed to load");
  return response.json();
}

function DataComponent() {
  const [data, { refetch }] = createResource(fetchItems);

  return (
    <ErrorBoundary
      fallback={(err, reset) => (
        <div class="error-state">
          <p>{err.message}</p>
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
      <Suspense fallback={<LoadingSkeleton />}>
        <div class="content">
          <For each={data()}>
            {(item) => (
              <div class="item">
                <img src={item.avatar} class="avatar" alt="Avatar" />
                <div class="content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            )}
          </For>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

export default DataComponent;
