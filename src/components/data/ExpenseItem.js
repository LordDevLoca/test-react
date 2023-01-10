import GetDate from "../function/getDate";

function ExpenseItem(props) {
  return (
    <div className="expenseCard">
      <div className="dateCard">
        <GetDate data={props.data} />
      </div>
      <div className="titleCard">
        <span>{props.title}</span>
      </div>
      <div className="amountCard">
        <span>€ {props.amount}</span>
      </div>
    </div>
  );
}

export default ExpenseItem;
