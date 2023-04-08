import "./ExpenseItems.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpensePrice from "./ExpensePrice";

const ExpenseItems = (props) => {

  let title = props.expenseData.title;
  const ClickHandler = () => {    
    title = "updated";
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseData.date} />
      <div className="expense-items__description">
        <h2>{title}</h2>
        <ExpensePrice price={props.expenseData.amount} />
      </div>
      <button onClick={ClickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItems;