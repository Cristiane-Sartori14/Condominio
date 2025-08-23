import { Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

export default function TextArea({
  value,
  onChangeText,
  placeholder = "Digite aqui...",
  numberOfLines = 4,
  style,
  editable = true,
}) {
  return (
    <TextInput
      style={[styles.textarea, style]}
      multiline={true}
      numberOfLines={numberOfLines}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      textAlignVertical="top"
      editable={editable}
    />
  );
}

const styles = StyleSheet.create({
  textarea: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "white",
    height: 120,
  },
});
