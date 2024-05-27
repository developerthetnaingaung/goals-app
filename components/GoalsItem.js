import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalsItem = (props) => {
  return (
    <View style={styles.goalsItem}>
      <Pressable
        android_ripple={{ color: "darkblue" }}
        onPress={props.deleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalsItem;

const styles = StyleSheet.create({
  goalsItem: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#946CE3",
  },
  goalText: {
    color: "white",
    padding: 15,
  },
});
