import "./Expenses.css";
import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((props) => (
        <ExpenseItems expenseData={props} />
      ))}
    </Card>
  );
}

export default Expenses;