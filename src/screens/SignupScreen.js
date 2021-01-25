import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions/auth_actions";
// import * as actions from "../actions/auth_actions";

import { NavigationEvents } from "react-navigation";
// import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from "../compos/AuthForm";
import NavLink from "../compos/NavLink";

class SignupScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <NavigationEvents onWillBlur={this.props.auth.clearErrorMessage} /> */}
        <AuthForm
          headerText="Sign Up for ..."
          // errorMessage={this.props.auth.errorMessage}
          submitButtonText="Sign Up"
          onSubmit={this.props.signup}
        />
        <NavLink
          routeName="Signin"
          text="Already have an account? Sign in instead!"
        />
      </View>
    );
  }
}

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
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
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(SignupScreen);
