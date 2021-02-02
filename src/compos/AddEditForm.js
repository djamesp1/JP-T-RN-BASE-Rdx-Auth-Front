import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text, Input, Button } from "react-native-elements";
// import { SafeAreaView } from "react-navigation";
import Spacer from "../compos/Spacer";

const AddEditForm = ({
  headerText,
  inputTextArr,
  passedName,
  passedLocation,
  submitButtonText,
  onSubmit,
  onDeleteBtnPush,
}) => {
  const [first, setFirst] = useState(passedName);
  const [second, setSecond] = useState(passedLocation);

  return (
    <>
      <View style={{ alignItems: "center" }}>
        <Text h2>{headerText}</Text>
      </View>
      <Spacer>
        <Input
          value={first}
          onChangeText={setFirst}
          placeholder={inputTextArr[0]}
        />
      </Spacer>
      <Spacer>
        <Input
          value={second}
          onChangeText={setSecond}
          placeholder={inputTextArr[1]}
        />
      </Spacer>
      <View style={styles.btnContainerStyle}>
        <Button
          title={submitButtonText}
          raised
          buttonStyle={styles.buttonStyle}
          onPress={() => {
            onSubmit(first, second);
            setFirst("");
            setSecond("");
          }}
        />
      </View>

      <Spacer />
      {submitButtonText === "Create" ? null : (
        <View style={[styles.btnContainerStyle, { margintop: 50 }]}>
          <Button
            title="Delete this Thing !!"
            raised
            buttonStyle={styles.buttonStyle}
            onPress={() => {
              onDeleteBtnPush();
              setFirst("");
              setSecond("");
            }}
          />
        </View>
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
    backgroundColor: "limegreen",
    height: 50,
    width: 200,
    borderRadius: 20,
  },
});

export default AddEditForm;
