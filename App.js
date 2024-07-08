import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Clock from "./components/Clock";
import { Button } from "react-native-paper";
import ButtonPanel from "./components/ButtonPanel";
import StopwatchList from "./components/StopwatchList";
import { useEffect, useRef, useState } from "react";
import { formatTime } from "./utils/date";

const start = Date.now();
export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const timer = useRef();
  const startTimeRef = useRef(0);
  const [time, setTime] = useState(0);
  const [timeList, setTimeList] = useState([]);

  useEffect(() => {
    if (isRunning) {
      timer.current = setInterval(() => {
        setTime(Date.now() - startTimeRef.current);
      }, 50);
    }

    return () => clearInterval(timer.current);
  }, [isRunning]);

  const clearHandler = () => {
    setIsRunning(false);
    setTime(0);
    setTimeList([]);
  };

  const lapHandler = () => {
    console.log(time);
    console.log(timeList);
    if (!timeList.includes(formatTime(time))) {
      setTimeList((prevState) => [formatTime(time), ...prevState]);
    }
  };

  const stopHandler = () => {
    setIsRunning(false);
  };

  const startHandler = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - time;
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Clock time={formatTime(time)} />
      <StopwatchList items={timeList} />

      <ButtonPanel
        onClear={clearHandler}
        onLap={lapHandler}
        onStop={stopHandler}
        onStart={startHandler}
        isRunning={isRunning}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBF6F0",
    alignItems: "center",
    paddingTop: 40,
  },
});
