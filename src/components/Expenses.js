import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.item.map((prop) => (
        <ExpenseItem
          title={prop.title}
          amount={prop.amount}
          date={prop.date}
          location={prop.location}
        />
      ))}
    </div>
  );
}

export default Expenses;
