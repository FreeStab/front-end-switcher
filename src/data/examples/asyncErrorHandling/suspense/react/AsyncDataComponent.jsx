import { useState, useEffect } from "react";

function AsyncDataComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(setData);
  }, []);

  return (
    <div className="data-list">
      {data.map((item) => (
        <div key={item.id} className="item">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default AsyncDataComponent;
