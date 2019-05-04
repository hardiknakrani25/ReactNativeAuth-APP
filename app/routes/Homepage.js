import React, { Component } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { Actions } from "react-native-router-flux";
import styles from "./styles";

class HomePage extends Component {
  getProtectedQuote() {
    Alert.alert("We will print a Chuck Norris quote");
  }
  userLogout() {
    Actions.Authentication();
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../images/chuck_norris.png")}
          style={styles.image}
        />

        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={this.getProtectedQuote}
        >
          <Text style={styles.buttonText}> Get Chuck Norris quote! </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={this.userLogout}
        >
          <Text style={styles.buttonText}> Log out </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomePage;
