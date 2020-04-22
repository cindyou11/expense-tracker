import React, { useState } from 'react';
import './App.css';
import AddExpenseForm from './Components/AddExpenseForm';
import ExpensesTable from './Components/ExpensesTable';

function App() {
  const [expenses, setExpenses] = useState([])

  const addExpense = (expense) => {
    setExpenses([...expenses, expense])
  }

  return (
    <div className="App">
      <AddExpenseForm addExpense={addExpense} />
      <ExpensesTable expenses={expenses}/>
    </div>
  );
}

export default App;
