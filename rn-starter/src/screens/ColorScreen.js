import React, { useState } from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);
  return (
    <View>
      <Text>Color Screen Page</Text>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <View style={{ height: 100, width: 100, backgroundColor: randomRgb() }} />
    </View>
  );
};
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return "rgb(" + red + "," + green + "," + blue + ")";
};
const styles = StyleSheet.create({});

export default ColorScreen;
