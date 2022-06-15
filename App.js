import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  ManageExpenseScreen,
  AllExpensesScreen,
  RecentExpensesScreen,
} from "./screens";
import { SCREENS, GLOBAL_STYLES } from "./constants";
import { IconButton } from "./components/ui/IconButton";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GLOBAL_STYLES.COLORS.PRIMARY_500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GLOBAL_STYLES.COLORS.PRIMARY_500 },
        tabBarActiveTintColor: GLOBAL_STYLES.COLORS.ACCENT_500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => navigation.navigate(SCREENS.MANAGE_EXPENSE)}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name={SCREENS.RECENT_EXPENSES}
        component={RecentExpensesScreen}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name={SCREENS.ALL_EXPENSES}
        component={AllExpensesScreen}
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
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
            options={{ headerShown: false }}
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
