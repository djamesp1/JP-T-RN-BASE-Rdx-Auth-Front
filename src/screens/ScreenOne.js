import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
// import { Button } from 'react-native-elements';
import { SafeAreaView } from "react-navigation";
import Spacer from "../compos/Spacer";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationEvents } from "react-navigation";
import { connect } from "react-redux";
import * as actions from "../actions/auth_actions";

class ScreenOne extends Component {
  render() {
    return (
      <SafeAreaView forceInset={{ top: "always" }}>
        <Text style={{ fontSize: 24 }}>ScreenOne</Text>
      </SafeAreaView>
    );
  }
}

ScreenOne.navigationOptions = () => {
  return {
    title: "JP-One",
    tabBarIcon: <FontAwesome name="plus" size={20} />,
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

export default connect(mapStateToProps, actions)(ScreenOne);
