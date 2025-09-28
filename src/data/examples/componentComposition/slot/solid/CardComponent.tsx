import { JSX } from "solid-js";
import "./Card.css";

interface CardProps {
  children: JSX.Element;
}

function CardComponent(props: CardProps) {
  return (
    <div class="card">
      <div class="card-body">{props.children}</div>
    </div>
  );
}

export default CardComponent;
