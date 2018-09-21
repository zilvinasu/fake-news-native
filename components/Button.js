import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const Button = ({ onPress, title = "Submit", style = {} }) => (
  <View style={styles.buttonContainer}>
    <TouchableHighlight
      underlayColor="#3D5B93"
      style={[styles.button, style]}
      onPress={onPress}
    >
      <Text style={styles.submit}>{title}</Text>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center"
  },
  button: {
    height: 32,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#4A6AAB",
    width: 200,
    marginTop: 15,
    width: "80%",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.1)",
    justifyContent: "center",
    alignItems: "center"
  },
  submit: {
    color: "#FFFFFF",
    fontWeight: "600"
  }
});

export default Button;
