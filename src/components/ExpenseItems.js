import "./ExpenseItems.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import Price from "./Price";

export default function ExpenseItems(props) {
  console.log(props)
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseData.date} />
      <div className="expense-items__description">
        <h2>{props.expenseData.title}</h2>
        <Price price={props.expenseData.amount} />
      </div>
    </Card>
  );
}
