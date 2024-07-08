import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AnimatedClock from "../UI/AnimatedClock";

const Clock = ({ time }: { time: string }) => {
  return (
    <View style={styles.container}>
      <AnimatedClock time={time} />
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

export default Clock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    color: "#4B463F",
    fontSize: 64,
    fontWeight: "bold",
  },
});
