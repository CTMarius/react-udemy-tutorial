import "./Expenses.css";
import ExpenseItems from "./ExpenseItems";

export default function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItems expenseData={props.expenses[0]} />
      <ExpenseItems expenseData={props.expenses[1]} />
      <ExpenseItems expenseData={props.expenses[2]} />
      <ExpenseItems expenseData={props.expenses[3]} />
    </div>
  );
}
