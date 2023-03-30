import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItems(props) {
  console.log(props)
  return (
    <div className="expense-item">
      <ExpenseDate date={props.expenseData.expenses.date} />
      <div className="expense-items__description">
        <h2>{props.expenseData.expenses.title}</h2>
        <div className="expense-item__price">${props.expenseData.expenses.amount}</div>
      </div>
    </div>
  );
}
