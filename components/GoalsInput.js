import React from "react";
import { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const GoalsInput = (props) => {
  const [enterGoalsText, setEnterGoalsText] = useState("");

  function inputGoalsHandler(enterText) {
    setEnterGoalsText(enterText);
  }

  function addGoalHandler() {
    props.onAddGoals(enterGoalsText);
    setEnterGoalsText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.TextInput}
        placeholder="Your Course Goals"
        onChangeText={inputGoalsHandler}
        value={enterGoalsText}
      />
      <Button title="Add Goals" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalsInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    borderBottomWidth: 2,
    borderBottomColor: "purple",
  },
  TextInput: {
    width: "70%",
    borderColor: "black",
    borderWidth: 1,
    padding: 8,
    marginRight: 10,
  },
});
