import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Provider } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import store from "./src/utils/store";
import { setNavigator } from "./src/utils/navigationRef";

import AccountScreen from "./src/screens/authScreens/AccountScreen";
import ScreenOne from "./src/screens/ScreenOne";
import SigninScreen from "./src/screens/authScreens/SigninScreen";
import SignupScreen from "./src/screens/authScreens/SignupScreen";
import ResolveAuthScreen from "./src/screens/authScreens/ResolveAuthScreen";

import ThingListScreen from "./src/screens/thingScreens/ThingListScreen";
import ThingDetailScreen from "./src/screens/thingScreens/ThingDetailScreen";
import ThingCreateScreen from "./src/screens/thingScreens/ThingCreateScreen";

const thingListFlow = createStackNavigator({
  ThingList: ThingListScreen,
  ThingDetail: ThingDetailScreen,
});

thingListFlow.navigationOptions = {
  title: "Things",
  tabBarIcon: <FontAwesome name="th-list" size={20} />,
};

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen,
  }),
  mainFlow: createBottomTabNavigator({
    thingListFlow,
    ThingCreate: ThingCreateScreen,
    // One: ScreenOne,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <Provider store={store}>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </Provider>
  );
};
