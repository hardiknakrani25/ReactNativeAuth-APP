import React, { Component } from "react";
import { SafeAreaView, Text } from "react-native";

import { Router, Scene } from "react-native-router-flux";

class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            component={Authentication}
            hideNavBar={true}
            initial="Authentication"
            title="Authentication"
          />
          <Scene
            component={HomePage}
            hideNavBar={true}
            key="HomePage"
            title="Home Page"
          />
        </Scene>
      </Router>
    );
  }
}
export default App;
