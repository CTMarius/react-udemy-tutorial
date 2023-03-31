import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItems(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.expenseData.date} />
      <div className="expense-items__description">
        <h2>{props.expenseData.title}</h2>
        <div className="expense-item__price">${props.expenseData.amount}</div>
      </div>
    </div>
  );
}
