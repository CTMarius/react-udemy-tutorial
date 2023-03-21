import "./ExpenseItems.css";

export default function ExpenseItems() {
  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-items__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$298.65</div>
      </div>
    </div>
  );
}
