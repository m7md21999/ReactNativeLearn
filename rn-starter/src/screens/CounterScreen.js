import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text>This is CounterScreen Page</Text>

      <Button
        title="increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      ></Button>

      <Button
        title="decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      ></Button>

      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
