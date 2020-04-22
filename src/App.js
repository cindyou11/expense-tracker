import React, { useState } from 'react';
import './App.css';
import AddExpenseForm from './Components/AddExpenseForm';

function App() {
  const [expenses, setExpenses] = useState([])

  const addExpense = (expense) => {
    setExpenses([...expenses, expense])
  }

  return (
    <div className="App">
      <AddExpenseForm addExpense={addExpense} />
    </div>
  );
}

export default App;
