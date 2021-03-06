import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import Router from "./Router";

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
