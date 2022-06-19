import { useContext } from "react";

import { ExpensesContext } from "../store/expenses-context";
import { ExpensesOutput } from "../components/ExpensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../utils/date";

export const RecentExpensesScreen = () => {
  const expensesContext = useContext(ExpensesContext);

  const today = new Date();
  const date7DaysAgo = getDateMinusDays(today, 7);
  const recentExpenses = expensesContext.expenses.filter(
    (expense) => expense.date > date7DaysAgo
  );

  return <ExpensesOutput periodName="Last 7 days" expenses={recentExpenses} />;
};
