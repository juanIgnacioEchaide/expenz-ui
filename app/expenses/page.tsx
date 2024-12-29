'use client';

import { useEffect, useState } from 'react';
import { fetchExpenses } from '../lib/api';


type Expense = {
  _id: string;
  amount: number;
  currency: string;
  description: string;
  paymentDate: string;
};

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const loadExpenses = async () => {
      try {
        const data = await fetchExpenses();
        setExpenses(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadExpenses();
  }, []);

  return (
    <div>
      <h1>Expense List</h1>
      <ul>
        {expenses.map((expense) => (
          <li key={expense._id}>
            {expense.description} - {expense.amount} {expense.currency} -{' '}
            {new Date(expense.paymentDate).toLocaleDateString()}
          </li>
        ))}
      </ul>

      <h2>Add New Expense</h2>
      <AddExpenseForm onExpenseAdded={(newExpense: Expense) => setExpenses([...expenses, newExpense])} />
    </div>
  );
}
