import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBgFwRPsJ4-LobY6Ctn0lpHpAlhEauZo7A",
      authDomain: "employeesreduxapp.firebaseapp.com",
      databaseURL: "https://employeesreduxapp.firebaseio.com",
      projectId: "employeesreduxapp",
      storageBucket: "employeesreduxapp.appspot.com",
      messagingSenderId: "1034586755870"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
