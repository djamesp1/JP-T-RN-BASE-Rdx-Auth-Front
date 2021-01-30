import React, { Component } from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Spacer from "../../compos/Spacer";
import { FontAwesome } from "@expo/vector-icons";
// import { NavigationEvents } from "react-navigation";
import { connect } from "react-redux";
import * as actions from "../../actions";

class ThingListScreen extends Component {
  componentDidMount = async () => {
    await this.props.fetchThings();
    // console.log("cdm: ", this.props.things);
  };

  render() {
    return (
      <>
        {/* <NavigationEvents onWillFocus={this.props.fetchThings} /> */}
        <SafeAreaView forceInset={{ top: "always" }}>
          <FlatList
            data={this.props.things}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => {
              return <Text style={{ fontSize: 24 }}>{item.thingName}</Text>;
            }}
          />
        </SafeAreaView>
      </>
    );
  }
}

ThingListScreen.navigationOptions = () => {
  return {
    title: "Things",
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

export default connect(mapStateToProps, actions)(ThingListScreen);

/* const ThingListScreen = ({ navigation }) => {
  // const { state, fetchThings } = useContext(ApiContext);
  return ( 
    <>
      <NavigationEvents onWillFocus={fetchThings} />
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ThingDetail", { _id: item._id })
              }
            >
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
}; */
