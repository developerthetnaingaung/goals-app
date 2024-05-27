import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enterGoalsText, setenterGoalsText] = useState("");
  const [enterGoals, setenterGoals] = useState([]);

  // function for inputGoals
  function inputGoalsHandler(enterText) {
    setenterGoalsText(enterText);
  }

  // functon for add goals button
  function addGoalHandler() {
    setenterGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enterGoalsText, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Your Course Goals"
          onChangeText={inputGoalsHandler}
        />
        <Button title="Add Goals" onPress={addGoalHandler} />
      </View>

      <View style={styles.goalsContainer}>
        <FlatList
          data={enterGoals}
          renderItem={(itemData) => {
            return (
              <View key={itemData.id}>
                <Text style={styles.goalsItem}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 19,
  },
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
  goalsContainer: {
    flex: 5,
  },
  goalsItem: {
    margin: 9,
    padding: 15,
    borderRadius: 18,
    backgroundColor: "purple",
    color: "white",
  },
});
