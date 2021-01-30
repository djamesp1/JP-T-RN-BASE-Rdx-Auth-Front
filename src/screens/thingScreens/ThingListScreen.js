import React, { useEffect, useState } from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";
import { NavigationEvents } from "react-navigation";
import { ListItem, Icon } from "react-native-elements";

import { useDispatch, useSelector } from "react-redux";
import { fetchThings } from "../../actions/thing_actions";

const ThingListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const things = useSelector((state) => state.things);

  useEffect(() => {
    dispatch(fetchThings());
  }, []);

  return (
    <>
      <Text>Things Test</Text>
      <SafeAreaView forceInset={{ top: "always" }}>
        <FlatList
          data={things}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ThingDetail", { _id: item._id })
                }
              >
                <ListItem bottomDivider>
                  <Icon name="heartbeat" type="font-awesome" color="#f50" />
                  <ListItem.Content>
                    <ListItem.Title>{item.thingName}</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    </>
  );
};

ThingListScreen.navigationOptions = {
  title: "Things",
};

const styles = StyleSheet.create({});

export default ThingListScreen;
