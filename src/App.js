import { useEffect, useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import AddExpense from "./components/NewExpense/AddExpense";

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchFromFirebase();
  }, []);

  const fetchFromFirebase = async () => {
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
  };

  const addToFirebase = async (newData) => {
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
  };

  console.log(expenses);
  return (
    <div>
      <AddExpense addExpenseHandler={addToFirebase} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
