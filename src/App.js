import React, { useState } from "react";
import "./App.css";
import AddExpenseForm from "./Components/AddExpenseForm";
import ExpensesTable from "./Components/ExpensesTable";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    expenses.unshift(expense);
    setExpenses([...expenses]);
  };

  const deleteExpense = (index) => {
    expenses.splice(index, 1);
    setExpenses([...expenses]);
  };

  return (
    <div className="App">
      <AddExpenseForm addExpense={addExpense} />
      <ExpensesTable expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
