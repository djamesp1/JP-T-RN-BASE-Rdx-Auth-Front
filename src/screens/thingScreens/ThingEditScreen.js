import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../../compos/Spacer";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import { editThing, deleteThing } from "../../actions/thing_actions";
import AddEditForm from "../../compos/AddEditForm";

const ThingEditScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const passedName = navigation.getParam("name");
  const passsedLocation = navigation.getParam("location");
  const _id = navigation.getParam("_id");

  const edit = (name, location) => {
    // console.log("checkin: ", _id, name, location);
    dispatch(editThing({ _id, name, locations: location }));
  };

  const deleteFxn = () => {
    // console.log("checkin: ", _id);
    dispatch(deleteThing({ _id }));
  };

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <AddEditForm
        headerText="Edit a Thing"
        inputTextArr={["Change Name", "Change Location"]}
        passedName={passedName}
        passedLocation={passsedLocation}
        submitButtonText="Change"
        onSubmit={edit}
        onDeleteBtnPush={deleteFxn}
        // errorMessage={this.props.auth.errorMessage}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default ThingEditScreen;
