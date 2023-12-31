import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";

function Expenses(props) {
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
