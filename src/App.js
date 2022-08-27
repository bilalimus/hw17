import { useEffect, useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import AddExpense from "./components/NewExpense/AddExpense";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchFromFirebase();
  }, []);

  const fetchFromFirebase = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://expense-tracker-5deba-default-rtdb.firebaseio.com/expenses.json"
    );
    const data = await response.json();

    const downloadExpenses = [];

    for (const key in data) {
      downloadExpenses.push({
        id: key,
        title: data[key].title,
        amount: data[key].amount,
        date: data[key].date,
      });
    }
    setExpenses(downloadExpenses);
    setIsLoading(false);
  };

  const addToFirebase = async (newData) => {
    setIsLoading(true);
    await fetch(
      "https://expense-tracker-5deba-default-rtdb.firebaseio.com/expenses.json",
      {
        method: "POST",
        body: JSON.stringify(newData),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    await fetchFromFirebase()
    setIsLoading(false);
  };

  let content = <h2>There are no items</h2>

  if(expenses.length > 0){
    content = <Expenses expenses={expenses} />
  }
  if(isLoading) {
    content = <h2>Loading...</h2>
  }

  console.log(expenses);
  return (
    <div className="App">
      <AddExpense addExpenseHandler={addToFirebase} />
      {content}
    </div>
  );
}

export default App;
