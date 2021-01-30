import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { Context as ThingContext } from "./ThingContext";
import useSaveThing from "./useSaveThing";
import { FontAwesome } from "@expo/vector-icons";

const ThingCreateScreen = () => {
  const {
    state: { name, location },
    changeName,
    addLocation,
  } = useContext(ThingContext);
  const [saveThing] = useSaveThing();

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Thing</Text>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter name"
        />
      </Spacer>
      <Spacer>
        <Input
          value={location}
          onChangeText={addLocation}
          placeholder="Enter location"
        />
      </Spacer>
      <Button title="Make a Thing" onPress={saveThing} />
    </SafeAreaView>
  );
};

ThingCreateScreen.navigationOptions = {
  title: "Add Thing",
  tabBarIcon: <FontAwesome name="plus" size={20} />,
};

const styles = StyleSheet.create({});

export default ThingCreateScreen;
