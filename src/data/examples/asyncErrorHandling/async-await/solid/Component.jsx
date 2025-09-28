import { createSignal } from "solid-js";

function Component() {
  const [data, setData] = createSignal(null);
  const [loading, setLoading] = createSignal(false);
  const [error, setError] = createSignal(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/data");
      if (!response.ok) throw new Error("Failed to fetch");
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchData} disabled={loading()}>
        {loading() ? "Loading..." : "Fetch Data"}
      </button>
      {error() && <div class="error">{error()}</div>}
      {data() && <div>{data().message}</div>}
    </div>
  );
}

export default Component;
