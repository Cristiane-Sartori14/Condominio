import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Button({ title, onPress, variant = "primary"  }) {

  return (
    <TouchableOpacity
      style={[styles.button, styles[variant]]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, variant === "primary" && styles.textOutline]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  primary: {
    backgroundColor: "black",
  },
  secondary: {
    backgroundColor: "#C3EA93",
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "black",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  textOutline: {
    color: "white"
  }
});
