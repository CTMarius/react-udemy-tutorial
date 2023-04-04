import "./ExpenseItems.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpensePrice from "./ExpensePrice";

export default function ExpenseItems(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseData.date} />
      <div className="expense-items__description">
        <h2>{props.expenseData.title}</h2>
        <ExpensePrice price={props.expenseData.amount} />
      </div>
    </Card>
  );
}
