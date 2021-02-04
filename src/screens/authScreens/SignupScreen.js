import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import Spacer from "../../compos/Spacer";
import { NavigationEvents } from "react-navigation";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../../compos/AuthForm";
import NavLink from "../../compos/NavLink";
import { signup, clearErrorMessage } from "../../actions/auth_actions";

const SignupScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const errorMsg = useSelector((state) => state.auth.errorMessage);
  const attemptSignup = (email, password) => {
    console.log("email :", email, "pwd :", password);
    dispatch(signup({ email: email, password: password }));
  };
  const clrError = () => {
    dispatch(clearErrorMessage());
  };

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <NavigationEvents onWillBlur={clrError} />
      <AuthForm
        headerText="Sign Up for ..."
        errorMessage={errorMsg}
        onSubmit={attemptSignup}
        submitButtonText="Sign Up"
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead!"
      />
    </SafeAreaView>
  );
};

SignupScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({});

export default SignupScreen;
