import "./ExpensePrice.css";

export default function ExpensePrice(props) {
  return <div className="price">${props.price}</div>;
}
