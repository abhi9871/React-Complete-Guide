import "./ExpenseDetails.css";

function ExpenseDetails(props) {
    return (
        <div className="expense-details__description">
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <div className="expense-details__price">${props.amount}</div>
      </div>
    )
}

export default ExpenseDetails;