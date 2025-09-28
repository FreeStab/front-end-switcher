interface ChildProps {
  title: string;
  count?: number;
  isActive?: boolean;
}

function ChildComponent(props: ChildProps) {
  const count = () => props.count ?? 0;
  const isActive = () => props.isActive ?? false;

  return (
    <div>
      <h1>{props.title}</h1>
      <p>Count: {count()}</p>
      <p>Status: {isActive() ? "Active" : "Inactive"}</p>
    </div>
  );
}

export default ChildComponent;
