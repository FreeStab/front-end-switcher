function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.onIncrement}>+</button>
      <button onClick={props.onDecrement}>-</button>
    </div>
  );
}

export default ChildComponent;
