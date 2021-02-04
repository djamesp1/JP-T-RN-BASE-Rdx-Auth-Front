import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../../compos/Spacer";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../actions/auth_actions";

const AccountScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 24 }}>AccountScreen</Text>
      <Text style={{ fontSize: 24 }}>User: {user.email}</Text>
      <Spacer>
        <Button
          title="Sign Out"
          onPress={() => {
            dispatch(signout());
          }}
        />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: "JP-Account",
  tabBarIcon: <FontAwesome name="user" size={20} />,
};

const styles = StyleSheet.create({});

export default AccountScreen;
