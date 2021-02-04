import React, { useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
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
  errorMessage,
}) => {
  const [first, setFirst] = useState(passedName);
  const [second, setSecond] = useState(passedLocation);
  const [actIndy, setActIndy] = useState(false);

  return (
    <>
      {actIndy && !errorMessage ? (
        <ActivityIndicator size="large" />
      ) : (
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

          {errorMessage ? (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          ) : null}

          <View style={styles.btnContainerStyle}>
            <Button
              title={submitButtonText}
              raised
              buttonStyle={styles.buttonStyle}
              onPress={() => {
                onSubmit(first, second);
                setActIndy(true);
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
                  setActIndy(true);
                  setFirst("");
                  setSecond("");
                }}
              />
            </View>
          )}
        </>
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
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
});

export default AddEditForm;
