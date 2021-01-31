import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../../compos/Spacer";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";

const ThingCreateScreen = () => {
  /* const {
    state: { name, location },
    changeName,
    addLocation,
  } = useContext(ThingContext);
  const [saveThing] = useSaveThing(); */

  return <Text>ThingCreateScreen</Text>;
};

ThingCreateScreen.navigationOptions = {
  title: "Add Thing",
  tabBarIcon: <FontAwesome name="plus" size={20} />,
};

const styles = StyleSheet.create({});

export default ThingCreateScreen;
