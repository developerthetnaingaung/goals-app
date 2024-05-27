import React from "react";
import { StyleSheet, View, Text } from "react-native";

const GoalsItem = (props) => {
  return (
    <View>
      <Text style={styles.goalsItem}>{props.text}</Text>
    </View>
  );
};

export default GoalsItem;

const styles = StyleSheet.create({
  goalsItem: {
    margin: 9,
    padding: 15,
    borderRadius: 18,
    backgroundColor: "purple",
    color: "white",
  },
});
