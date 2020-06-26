import React from "react";
import { View, StyleSheet, Text, a, Button } from "react-native";
import ImageDet from "../components/ImageDet";

const ImageScreen = () => {
  return (
    <View>
      <ImageDet
        title="Forest"
        imgSrc={require("../../assets/forest.jpg")}
        imgScore="9"
      />
      <ImageDet
        title="Beach"
        imgSrc={require("../../assets/beach.jpg")}
        imgScore="6"
      />
      <ImageDet
        title="Mountain"
        imgSrc={require("../../assets/mountain.jpg")}
        imgScore="8"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
