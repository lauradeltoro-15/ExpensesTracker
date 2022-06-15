import { Pressable, StyleSheet, Text, View } from "react-native";

import { GLOBAL_STYLES } from "../../constants";

export const ExpenseItem = ({ description, date, amount }) => (
  <Pressable>
    <View style={styles.expenseItem}>
      <View>
        <Text style={[styles.textBase, styles.description]}>{description}</Text>
        <Text style={styles.textBase}>{date.toString()}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>{amount}</Text>
      </View>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GLOBAL_STYLES.COLORS.PRIMARY_500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GLOBAL_STYLES.COLORS.GRAY_500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GLOBAL_STYLES.COLORS.PRIMARY_50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  amount: {
    color: GLOBAL_STYLES.COLORS.PRIMARY_500,
    fontWeight: "bold",
  },
});