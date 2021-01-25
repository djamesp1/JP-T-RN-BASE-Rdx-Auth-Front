import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { NavigationEvents } from "react-navigation";

// import { Button } from 'react-native-elements';
import { SafeAreaView } from "react-navigation";
// import Spacer from '../components/Spacer';
// import { FontAwesome } from '@expo/vector-icons';

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text>SignupScreen</Text>
      <Button
        title="Go to Signin"
        onPress={() => navigation.navigate("Signin")}
      />
      <Button
        title="Go to Main flow"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </>
  );
};

/* SignupScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name="gear" size={20} />
}; */

const styles = StyleSheet.create({});

export default SignupScreen;
