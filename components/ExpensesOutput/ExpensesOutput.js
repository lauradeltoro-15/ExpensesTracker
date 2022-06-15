import { View, StyleSheet } from "react-native";

import { ExpensesList } from "./ExpensesList";
import { ExpensesSummary } from "./ExpensesSummary";
import { GLOBAL_STYLES } from "../../constants";

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
    date: new Date("2022-06-12"),
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

export const ExpensesOutput = ({ expenses, periodName }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={periodName} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GLOBAL_STYLES.COLORS.PRIMARY_700,
  },
});
