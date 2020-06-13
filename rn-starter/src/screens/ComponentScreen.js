import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  const greetingInArabic = <Text>السلام عليكم و رحمة الله وبركاته</Text>;

  return (
    <View>
      <Text style={styles.textStyle}>This is the ComponentScreen</Text>
      {greetingInArabic}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentScreen;
