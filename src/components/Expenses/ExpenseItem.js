import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  // Click handler function for delete
  const deleteHandler = (e) => {
    return e.target.parentElement.remove();
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        location={props.location}
        amount={props.amount}
      />
      <button onClick={deleteHandler}>Delete Button</button>
    </Card>
  );
}

export default ExpenseItem;
