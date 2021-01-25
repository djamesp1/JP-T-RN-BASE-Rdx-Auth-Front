import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../compos/Spacer';
import { connect } from 'react-redux';
import * as actions from '../actions/auth_actions';

import { NavigationEvents } from 'react-navigation';
import AuthForm from '../compos/AuthForm';
import NavLink from '../compos/NavLink';

class SignupScreen extends Component {
  render() {
    return (
      <SafeAreaView forceInset={{ top: 'always' }}>
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
      </SafeAreaView>
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
    justifyContent: 'center',
    marginBottom: 250,
  },
});

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(SignupScreen);
