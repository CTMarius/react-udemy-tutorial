import "./Expenses.css";
import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";

export default function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((props) => (
        <ExpenseItems expenseData={props} />
      ))}
    </Card>
  );
}
