import ChildComponent from "./ChildComponent";

function Parent() {
  const pageTitle = "Hello World";
  const counter = 42;
  const isActive = true;

  return (
    <div>
      <ChildComponent title={pageTitle} count={counter} isActive={isActive} />
    </div>
  );
}

export default Parent;
