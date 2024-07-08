import { Easing, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const duration = 60000;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);

const AnimatedClock = ({ time }) => {
  return (
    <View>
      <View style={styles.circle}>
        <Animated.View style={[styles.arrow]} />
      </View>
    </View>
  );
};

export default AnimatedClock;

const styles = StyleSheet.create({
  circle: {
    borderRadius: 155,
    borderWidth: 8,
    borderColor: "#CA800C",
    padding: 110,
    margin: 0,
    position: "relative",
  },
  arrow: {
    position: "absolute",
    left: 100,
    width: 10,
    height: 120,
    backgroundColor: "#CA800C",
  },
});
