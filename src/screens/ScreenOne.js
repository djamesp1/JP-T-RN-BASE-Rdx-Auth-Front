import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
// import { Button } from 'react-native-elements';
import { SafeAreaView } from "react-navigation";
// import Spacer from "../compos/Spacer";
import { FontAwesome } from "@expo/vector-icons";
// import { NavigationEvents } from "react-navigation";
import { useDispatch, useSelector } from "react-redux";
// import { signout } from "../../actions/auth_actions";

const ScreenOne = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 24 }}>ScreenOne</Text>
    </SafeAreaView>
  );
};

ScreenOne.navigationOptions = {
  title: "JP-One",
  tabBarIcon: <FontAwesome name="plus" size={20} />,
};

const styles = StyleSheet.create({});

export default ScreenOne;
