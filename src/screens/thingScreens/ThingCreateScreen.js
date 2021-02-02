import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../../compos/Spacer";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import { createThing } from "../../actions/thing_actions";
import AddEditForm from "../../compos/AddEditForm";

const ThingCreateScreen = () => {
  const dispatch = useDispatch();

  const create = (name, location) => {
    dispatch(createThing({ name: name, locations: location }));
  };

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <AddEditForm
        headerText="Create a Thing"
        inputTextArr={["Enter Name", "Enter Location"]}
        // passedName=""
        // passedLocation=""
        submitButtonText="Create"
        onSubmit={create}
        // errorMessage={this.props.auth.errorMessage}
      />
    </SafeAreaView>
  );
};

ThingCreateScreen.navigationOptions = {
  title: "Add Thing",
  tabBarIcon: <FontAwesome name="plus" size={20} />,
};

const styles = StyleSheet.create({});

export default ThingCreateScreen;
