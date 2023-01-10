import ListExpenseItem from "./components/data/ListExpenseItem";
import ExpenseItem from "./components/data/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Spesa Carrefour",
      amount: 200,
      data: new Date(),
    },
    {
      title: "Spesa Migross",
      amount: 250,
      data: new Date(),
    },
    {
      title: "Spesa Esselunga",
      amount: 300,
      data: new Date(),
    },
  ];

  return (
    <div className="App text-white container-card">
      <div className="container">
        <ListExpenseItem expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
