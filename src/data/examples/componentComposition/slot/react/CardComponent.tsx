import { ReactNode } from "react";
import "./Card.css";

interface CardProps {
  children: ReactNode;
}

function CardComponent({ children }: CardProps) {
  return (
    <div className="card">
      <div className="card-body">{children}</div>
    </div>
  );
}

export default CardComponent;
