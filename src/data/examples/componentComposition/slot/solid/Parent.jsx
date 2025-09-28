import CardComponent from "./CardComponent";

function Parent() {
  return (
    <div>
      <CardComponent>
        <h2>Card Title</h2>
        <p>This is the card content</p>
        <button>Action Button</button>
      </CardComponent>
    </div>
  );
}

export default Parent;
