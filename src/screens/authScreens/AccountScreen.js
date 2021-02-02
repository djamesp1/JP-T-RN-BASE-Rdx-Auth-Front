import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../../compos/Spacer";
import { FontAwesome } from "@expo/vector-icons";
// import { NavigationEvents } from "react-navigation";

import { connect } from "react-redux";
import * as actions from "../../actions/auth_actions";

class AccountScreen extends Component {
  static navigationOptions = {
    title: "Map",
  };

  render() {
    return (
      <SafeAreaView forceInset={{ top: "always" }}>
        <Text style={{ fontSize: 24 }}>AccountScreen</Text>
        <Text style={{ fontSize: 24 }}>User: {this.props.auth.user.email}</Text>
        <Spacer>
          <Button title="Sign Out" onPress={this.props.signout} />
        </Spacer>
      </SafeAreaView>
    );
  }
}

AccountScreen.navigationOptions = () => {
  return {
    title: "JP-Account",
    tabBarIcon: <FontAwesome name="user" size={20} />,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(AccountScreen);
