import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props)  => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler} />
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
