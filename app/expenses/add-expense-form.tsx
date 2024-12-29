'use client';

import React, { useState } from "react";
import { addExpense } from "../lib/api";
import { Expense } from "./page";

export default function AddExpenseForm({ onExpenseAdded }: { onExpenseAdded: (expense: Expense) => void }) {
  const [form, setForm] = useState({
    amount: '',
    currency: 'USD',
    recipient: '',
    description: '',
    paymentDate: '',
    paymentMethod: {
      type: '',
      provider: { name: '', alias: '' },
      creditCard: { lastFourDigits: '', expiringDate: '' },
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newExpense = await addExpense(form);
      onExpenseAdded(newExpense);
      setForm({
        amount: '',
        currency: 'USD',
        recipient: '',
        description: '',
        paymentDate: '',
        paymentMethod: {
          type: '',
          provider: { name: '', alias: '' },
          creditCard: { lastFourDigits: '', expiringDate: '' },
        },
      });
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Recipient"
        value={form.recipient}
        onChange={(e) => setForm({ ...form, recipient: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        required
      />
      <input
        type="date"
        value={form.paymentDate}
        onChange={(e) => setForm({ ...form, paymentDate: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Payment Type"
        value={form.paymentMethod.type}
        onChange={(e) =>
          setForm({
            ...form,
            paymentMethod: { ...form.paymentMethod, type: e.target.value },
          })
        }
        required
      />
      <input
        type="text"
        placeholder="Card Provider"
        value={form.paymentMethod.provider.name}
        onChange={(e) =>
          setForm({
            ...form,
            paymentMethod: {
              ...form.paymentMethod,
              provider: { ...form.paymentMethod.provider, name: e.target.value },
            },
          })
        }
        required
      />
      <input
        type="text"
        placeholder="Last Four Digits"
        value={form.paymentMethod.creditCard.lastFourDigits}
        onChange={(e) =>
          setForm({
            ...form,
            paymentMethod: {
              ...form.paymentMethod,
              creditCard: {
                ...form.paymentMethod.creditCard,
                lastFourDigits: e.target.value,
              },
            },
          })
        }
        required
      />
      <input
        type="date"
        placeholder="Card Expiry"
        value={form.paymentMethod.creditCard.expiringDate}
        onChange={(e) =>
          setForm({
            ...form,
            paymentMethod: {
              ...form.paymentMethod,
              creditCard: {
                ...form.paymentMethod.creditCard,
                expiringDate: e.target.value,
              },
            },
          })
        }
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
