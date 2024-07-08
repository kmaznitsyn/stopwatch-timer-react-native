import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const ButtonPanel = ({
  onStop,
  onLap,
  onClear,
  onStart,
  isRunning,
}: {
  onStop: () => void;
  onLap: () => void;
  onStart: () => void;
  onClear: () => void;
  isRunning: boolean;
}) => {
  return (
    <View style={styles.buttonGroup}>
      <Button onPress={onClear} uppercase textColor="#CA800C">
        <Text style={styles.buttonText}>Clear</Text>
      </Button>

      <Button onPress={onLap} uppercase textColor="#CA800C">
        <Text style={styles.buttonText}>Lap</Text>
      </Button>

      {isRunning && (
        <Button onPress={onStop} uppercase textColor="#CA800C">
          <Text style={styles.buttonText}>Stop</Text>
        </Button>
      )}

      {!isRunning && (
        <Button onPress={onStart} uppercase textColor="#CA800C">
          <Text style={styles.buttonText}>Start</Text>
        </Button>
      )}
    </View>
  );
};

export default ButtonPanel;

const styles = StyleSheet.create({
  buttonGroup: {
    height: "9%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
