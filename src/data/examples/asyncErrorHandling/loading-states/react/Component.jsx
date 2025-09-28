import { useState, useEffect } from "react";
import "./Component.module.css";

function LoadingSkeleton() {
  return (
    <div className="skeleton-container">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="skeleton-item">
          <div className="skeleton-avatar"></div>
          <div className="skeleton-content">
            <div className="skeleton-line skeleton-line-title"></div>
            <div className="skeleton-line skeleton-line-text"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Component() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch("/api/items");
      if (!response.ok) throw new Error("Failed to load");
      setData(await response.json());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <LoadingSkeleton />;

  if (error)
    return (
      <div className="error-state">
        <p>{error}</p>
        <button onClick={fetchData}>Retry</button>
      </div>
    );

  return (
    <div className="content">
      {data?.map((item) => (
        <div key={item.id} className="item">
          <img src={item.avatar} className="avatar" alt="Avatar" />
          <div className="content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Component;
