import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Provider } from "react-redux";

import store from "./src/store";
import AccountScreen from "./src/screens/AccountScreen";
import ScreenOne from "./src/screens/ScreenOne";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";

const switchNavigator = createSwitchNavigator({
  // ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    One: ScreenOne,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
