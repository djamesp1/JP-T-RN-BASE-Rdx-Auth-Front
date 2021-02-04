import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import Spacer from "../../compos/Spacer";
import { NavigationEvents } from "react-navigation";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../../compos/AuthForm";
import NavLink from "../../compos/NavLink";
import { signin, clearErrorMessage } from "../../actions/auth_actions";

const SigninScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const errorMsg = useSelector((state) => state.auth.errorMessage);
  const attemptSignin = (email, password) => {
    console.log("email :", email, "pwd :", password);
    dispatch(signin({ email: email, password: password }));
  };
  const clrError = () => {
    dispatch(clearErrorMessage());
  };

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <NavigationEvents onWillBlur={clrError} />
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={errorMsg}
        onSubmit={attemptSignin}
        submitButtonText="Sign In"
      />
      <NavLink
        text="Don't have an account? Sign up instead"
        routeName="Signup"
      />
    </SafeAreaView>
  );
};

SigninScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({});

export default SigninScreen;
