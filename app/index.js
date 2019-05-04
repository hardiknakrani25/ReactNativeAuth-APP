import React, { Component } from "react";
import { AsyncStorage, ActivityIndicator } from "react-native";

import { Router, Scene } from "react-native-router-flux";

class App extends Component {
  constructor() {
    super();
    this.state = { hasToken: false, isLoaded: false };
  }

  componentWillMount() {
    AsyncStorage.getItem("id_token").then(token => {
      this.setState({ hasToken: token !== null, isLoaded: true });
    });
  }

  render() {
    if (!this.state.isLoaded) {
      return <ActivityIndicator />;
    } else {
      return (
        <Router>
          <Scene key="root">
            <Scene
              component={Authentication}
              hideNavBar={true}
              initial={!this.state.hasToken}
              title="Authentication"
              key="Authentication"
            />
            <Scene
              component={HomePage}
              hideNavBar={true}
              initial={this.state.hasToken}
              key="HomePage"
              title="Home Page"
            />
          </Scene>
        </Router>
      );
    }
  }
}
export default App;
