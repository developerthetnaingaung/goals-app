import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalsItem = (props) => {
  return (
    <Pressable onPress={props.deleteItem.bind(this, props.id)}>
      <View>
        <Text style={styles.goalsItem}>{props.text}</Text>
      </View>
    </Pressable>
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
