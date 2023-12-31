import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props)  => {
  return (
    <Card className="expenses">
      {props.item.map((prop) => (
        <ExpenseItem
          title={prop.title}
          amount={prop.amount}
          date={prop.date}
          location={prop.location}
        />
      ))}
    </Card>
  );
}

export default Expenses;
