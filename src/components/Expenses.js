import "./Expenses.css";
import ExpenseItems from "./ExpenseItems";
import Card from "./Card";

export default function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((props) => (
        <ExpenseItems expenseData={props} /> 
      ))}
    </Card>
  );
}
