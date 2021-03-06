import { useLayoutEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "../components/ui/Button";

import { IconButton } from "../components/ui/IconButton";
import { GLOBAL_STYLES } from "../constants";
import { ExpensesContext } from "../store/expenses-context";

export const ManageExpenseScreen = ({ route, navigation }) => {
  const expensesContext = useContext(ExpensesContext);

  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing, navigation]);

  const deleteHandler = () => {
    expensesContext.deleteExpense(expenseId);
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = () => {
    if (isEditing) {
      expensesContext.updateExpense(expenseId, {
        description: "Test updated",
        amount: 21.99,
        date: new Date("2022-05-21"),
      });
    } else {
      expensesContext.addExpense({
        description: "Test",
        amount: 19.99,
        date: new Date("2022-05-20"),
      });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GLOBAL_STYLES.COLORS.ERROR_500}
            size={36}
            onPress={deleteHandler}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GLOBAL_STYLES.COLORS.PRIMARY_800,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GLOBAL_STYLES.COLORS.PRIMARY_200,
    alignItems: "center",
  },
});
