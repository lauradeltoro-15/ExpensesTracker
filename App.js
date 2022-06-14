import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  ManageExpenseScreen,
  AllExpensesScreen,
  RecentExpensesScreen,
  SCREENS,
} from "./screens";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name={SCREENS.ALL_EXPENSES}
        component={AllExpensesScreen}
      />
      <BottomTabs.Screen
        name={SCREENS.RECENT_EXPENSES}
        component={RecentExpensesScreen}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={SCREENS.EXPENSES_OVERVIEW}
            component={ExpensesOverview}
          />
          <Stack.Screen
            name={SCREENS.MANAGE_EXPENSE}
            component={ManageExpenseScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
