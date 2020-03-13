import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Text
} from "react-native";

import firebase from "../config/firebaseConfig";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  loginUser = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function(user) {
          console.log(user);
        });
    } catch (error) {
      console.log(error.toString());
    }
  };
  render() {
    return (
      <View>
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
        />

        <TouchableOpacity
          onPress={() => this.loginUser(this.state.email, this.state.password)}
          style={styles.button}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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
  },
  button: {
    alignItems: "center",
    padding: 10
  }
});
