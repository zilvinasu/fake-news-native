import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Input = ({
  value,
  onChange,
  placeholder = "",
  style = {},
  multiline = false
}) => (
  <View style={styles.inputContainer}>
    <TextInput
      value={value}
      onChangeText={onChange}
      style={[styles.input, style]}
      multiline={multiline}
      placeholder={placeholder}
      placeholderTextColor="#CACACA"
      selectionColor="#666666"
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 18,
    marginRight: 18,
    marginBottom: 4,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: "#D3D3D3",
    shadowOffset: { width: 1, height: 1 }
  },
  input: {
    minHeight: 40,
    backgroundColor: "#ffffff",
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default Input;
