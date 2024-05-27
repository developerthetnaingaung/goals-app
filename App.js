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

import GoalsItem from "./components/GoalsItem";
import GoalsInput from "./components/GoalsInput";

export default function App() {
  const [enterGoals, setEnterGoals] = useState([]);

  //functon for add goals button
  function addGoalHandler(enterGoalsText) {
    setEnterGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enterGoalsText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setEnterGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalsInput onAddGoals={addGoalHandler} />
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
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 19,
  },
  goalsContainer: {
    flex: 5,
  },
});
