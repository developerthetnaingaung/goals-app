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
import { StatusBar } from "expo-status-bar";

import GoalsItem from "./components/GoalsItem";
import GoalsInput from "./components/GoalsInput";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [enterGoals, setEnterGoals] = useState([]);

  //functon for add goals button
  function addGoalHandler(enterGoalsText) {
    setEnterGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enterGoalsText, id: Math.random().toString() },
    ]);
    setModalVisible(false);
  }

  function deleteGoalHandler(id) {
    setEnterGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  function startAddGoalHandler() {
    setModalVisible(true);
  }

  function cancelAddGoalHandler() {
    setModalVisible(false);
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <Button
          title="Add To Goals"
          color="#A90BE8"
          onPress={startAddGoalHandler}
        />
        <GoalsInput
          visible={modalVisible}
          onAddGoals={addGoalHandler}
          onCancel={cancelAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={enterGoals}
            renderItem={(itemData) => {
              return (
                <GoalsItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  deleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 19,
    borderRadius: 10,
    backgroundColor: "#E2CAEB",
  },
  goalsContainer: {
    flex: 5,
  },
});
