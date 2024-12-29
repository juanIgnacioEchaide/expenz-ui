export const fetchExpenses = async () => {
  const res = await fetch("/api/expenses");
  if (!res.ok) throw new Error("Failed to fetch expenses");
  return res.json();
};

export const addExpense = async (expense: Record<string, unknown>) => {
  const res = await fetch("/api/expenses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expense),
  });

  if (!res.ok) throw new Error("Failed to add expense");
  return res.json();
};
