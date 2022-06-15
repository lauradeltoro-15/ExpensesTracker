import { Text, View, StyleSheet } from "react-native";

import { GLOBAL_STYLES } from "../../constants";

export const ExpensesSummary = ({ periodName, expenses }) => {
  const expensesSum = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GLOBAL_STYLES.COLORS.PRIMARY_50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: GLOBAL_STYLES.COLORS.PRIMARY_400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GLOBAL_STYLES.COLORS.PRIMARY_500,
  },
});
