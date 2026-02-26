import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        value={searchText}
        onChangeText={setSearchText}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#eee",
    marginVertical: 10,
    borderRadius: 5,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
});

export default SearchBar;