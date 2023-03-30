import './Expenses.css'
import ExpenseItems from './ExpenseItems'

export default function Expenses(props) {
  //console.log(props)
  return (
    <div className='expenses'>
      <ExpenseItems expenseData={props} />
    </div>
  );
}