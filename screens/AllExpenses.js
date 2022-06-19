import { useContext } from "react";

import { ExpensesOutput } from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

export const AllExpensesScreen = () => {
  const expensesContext = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      periodName="Total"
      expenses={expensesContext.expenses}
      fallbackText="No registered expenses found"
    />
  );
};
