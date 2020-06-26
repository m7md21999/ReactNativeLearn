import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDet = (props) => {
  return (
    <View>
      <Image source={props.imgSrc} />
      <Text>{props.title}</Text>
      <Text>Image Score: {props.imgScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDet;
