import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Bader", age: "27" },
    { name: "moahmmed", age: "27" },
    { name: "Khalied", age: "27" },
    { name: "Mshari", age: "27" },
    { name: "Saleh", age: "27" },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text>
            {item.name} , age : {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
