import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 50.99,
    date: new Date("2022-05-19"),
  },
  {
    id: "e2",
    description: "A pair of jeans",
    amount: 30.99,
    date: new Date("2022-06-18"),
  },
  {
    id: "e3",
    description: "Books",
    amount: 100.59,
    date: new Date("2022-06-10"),
  },
  {
    id: "e4",
    description: "Dinner",
    amount: 42.6,
    date: new Date("2022-03-20"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id }, ...state];
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    case "UPDATE":
      const updatedExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatedItem = {
        ...state[updatedExpenseIndex],
        ...action.payload.data,
      };
      const updatedExpenses = [...state];
      updatedExpenses[updatedExpenseIndex] = updatedItem;
      return updatedExpenses;
    default:
      return state;
  }
};

export const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };
  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id, data: expenseData } });
  };

  const value = {
    expenses: expensesState,
    addExpense,
    deleteExpense,
    updateExpense,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};
