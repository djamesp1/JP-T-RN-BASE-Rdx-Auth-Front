import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";

import { SafeAreaView } from "react-navigation";
import Spacer from "../../compos/Spacer";
import { useDispatch, useSelector } from "react-redux";

const ThingDetailScreen = ({ navigation }) => {
  const things = useSelector((state) => state.things);
  const _id = navigation.getParam("_id");

  const thing = things.find((t) => t._id === _id);

  return (
    <>
      {thing ? (
        <>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 48 }}>{thing.thingName}</Text>
            <Text style={{ fontSize: 48 }}>{thing.locations[0]}</Text>
          </View>
          <View style={styles.btnContainerStyle}>
            <Button
              title="Edit"
              buttonStyle={styles.buttonStyle}
              onPress={() =>
                navigation.navigate("ThingEdit", {
                  _id,
                  name: thing.thingName,
                  location: thing.locations[0],
                })
              }
            />
          </View>
        </>
      ) : (
        <Text>NoThing</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  btnContainerStyle: {
    flex: 1,
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: "steelblue",
    height: 50,
    width: 200,
    borderRadius: 20,
  },
});

export default ThingDetailScreen;
