function ChildComponent({ title, count = 0, isActive = false }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>Count: {count}</p>
      <p>Status: {isActive ? "Active" : "Inactive"}</p>
    </div>
  );
}

export default ChildComponent;
