import "./ExpenseItems.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpensePrice from "./ExpensePrice";
import React, { useState } from "react";

const ExpenseItems = (props) => {
  
  const [title, setTitle] = useState(props.expenseData.title); // this is a hook

  const ClickHandler = () => { 
    let newTitle = prompt("Please enter your new title");
    setTitle(newTitle);     
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