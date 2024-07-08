import { StyleSheet, Text, View } from "react-native";
import React from "react";

const StopwatchItem = ({ index, time }: { index: number; time: string }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.index, { paddingVertical: 5 }]}>
        <Text style={styles.indexText}>{index}</Text>
      </View>

      <View style={{ paddingVertical: 5 }}>
        <Text style={styles.text}>{time}</Text>
      </View>
    </View>
  );
};

export default StopwatchItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginVertical: 6,
    alignItems: "center",
    flexDirection: "row",
  },
  index: {
    borderWidth: 2,
    padding: 11,
    borderRadius: 40,
    borderColor: "#CA800C",
    textAlign: "center",
  },
  indexText: {
    color: "#CA800C",
  },
  text: {
    fontSize: 30,
    fontWeight: "500",
  },
});
