import ExpenseItem from "./ExpenseItem";

function ListExpenseItem(props) {
  return (
    <div>
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        data={props.expenses[0].data}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        data={props.expenses[1].data}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        data={props.expenses[2].data}
      />
    </div>
  );
}

export default ListExpenseItem;
