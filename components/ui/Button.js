import { Pressable, StyleSheet, Text, View } from "react-native";

import { GLOBAL_STYLES } from "../../constants";

export const Button = ({ children, onPress, mode, style }) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GLOBAL_STYLES.COLORS.PRIMARY_500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GLOBAL_STYLES.COLORS.PRIMARY_200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GLOBAL_STYLES.COLORS.PRIMARY_100,
    borderRadius: 4,
  },
});
