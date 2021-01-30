import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-navigation";
import Spacer from "../../compos/Spacer";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationEvents } from "react-navigation";
import { useDispatch, useSelector } from "react-redux";

const ThingDetailScreen = ({ navigation }) => {
  const things = useSelector((state) => state.things);
  const _id = navigation.getParam("_id");

  const thing = things.find((t) => t._id === _id);

  return (
    <>
      <Text style={{ fontSize: 48 }}>{thing.thingName}</Text>
      <Text style={{ fontSize: 48 }}>{thing.locations[0]}</Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default ThingDetailScreen;

/* class ThingDetailScreen extends Component {
  render() {
    return (
      <SafeAreaView forceInset={{ top: "always" }}>
        <Text style={{ fontSize: 24 }}>ThingDetailScreen</Text>
      </SafeAreaView>
    );
  }
}

ThingDetailScreen.navigationOptions = () => {
  return {
    title: "ThingDetail",
    tabBarIcon: <FontAwesome name="plus" size={20} />,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

function mapStateToProps({ auth, things }) {
  return { auth, things };
}

export default connect(mapStateToProps, actions)(ThingDetailScreen); */
