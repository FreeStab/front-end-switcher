function ChildComponent({ onIncrement, onDecrement }) {
  return (
    <div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  )
}

export default ChildComponent