import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SquareDet from "../components/SquareDet";

const SquareScreen = () => {
  return (
    <View>
      <Text>SquareScreen Page</Text>

      <SquareDet title="red" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
