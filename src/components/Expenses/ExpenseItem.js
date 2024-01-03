import {useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  // Click handler function for delete
  const deleteHandler = (e) => {
    return e.target.parentElement.remove();
  };

  const changeTitleHandler = () => {
    setTitle('Updated Title');
  }

  const changeAmountHandler = () => {
    setAmount(100);
  }

  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={title}
        location={props.location}
        amount={amount}
      />
      <button onClick={deleteHandler}>Delete Button</button>
      <button onClick={changeTitleHandler}>Change Title</button>
      <button onClick={changeAmountHandler}>Change Amount</button>
    </Card>
    </li>
  );
}

export default ExpenseItem;
