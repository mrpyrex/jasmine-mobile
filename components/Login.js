import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const Login = () => {
  return (
    <View>
      <TextInput placeholder="Email" style={styles.textInput} />
      <TextInput placeholder="Password" style={styles.textInput} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: "rgba(0,0,0,0.2)"
  }
});
