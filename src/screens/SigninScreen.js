import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import Spacer from "../compos/Spacer";
import { connect } from "react-redux";
import * as actions from "../actions/auth_actions";

import { NavigationEvents } from "react-navigation";
import AuthForm from "../compos/AuthForm";
import NavLink from "../compos/NavLink";

class SigninScreen extends Component {
  render() {
    return (
      <SafeAreaView forceInset={{ top: "always" }}>
        <NavigationEvents onWillBlur={this.props.clearErrorMessage} />
        <AuthForm
          headerText="Sign In to Your Account"
          errorMessage={this.props.auth.errorMessage}
          onSubmit={this.props.signin}
          submitButtonText="Sign In"
        />
        <NavLink
          text="Don't have an account? Sign up instead"
          routeName="Signup"
        />
      </SafeAreaView>
    );
  }
}

SigninScreen.navigationOptions = () => {
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
  return { auth };
}

export default connect(mapStateToProps, actions)(SigninScreen);
