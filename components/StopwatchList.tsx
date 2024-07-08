import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import StopwatchItem from "./StopwatchItem";

const StopwatchList = ({ items }: { items: [] }) => {
  return (
    <FlatList
      style={styles.container}
      data={items}
      keyExtractor={(index) => index}
      renderItem={({ item, index }) => (
        <StopwatchItem time={item} index={index + 1} />
      )}
    />
  );
};

export default StopwatchList;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
  },
});
