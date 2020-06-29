import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>
        Hello! ThiS is my first React Native app!!
      </Text>
      <Button
        title="Go To ListScreen Page"
        onPress={() => navigation.navigate("List")}
      />

      <TouchableOpacity onPress={() => navigation.navigate("Components")}>
        <Text>Go To ComponentScreen Page</Text>
      </TouchableOpacity>

      <Button
        title="Go to Image Screen Page"
        onPress={() => navigation.navigate("Images")}
      ></Button>

      <Button
        title="Go To Counter Screen Page"
        onPress={() => navigation.navigate("Counter")}
      />

      <Button
        title="Go to Color Screen"
        onPress={() => {
          navigation.navigate("Color");
        }}
      />

      <Button
        title="Go To Square Screen"
        onPress={() => navigation.navigate("Square")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
