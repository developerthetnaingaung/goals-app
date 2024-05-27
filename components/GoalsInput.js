import React from "react";
import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";

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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Your Course Goals"
          onChangeText={inputGoalsHandler}
          value={enterGoalsText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goals" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalsInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 18,
    backgroundColor: "#946CE3",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  TextInput: {
    width: "70%",
    borderColor: "black",
    borderWidth: 1,
    padding: 8,
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
