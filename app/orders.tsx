import React, { useState } from "react";
import {
  Text,
  Button,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  View,
} from "react-native";
import SearchBar from "../components/SearchBar";
import { useRouter } from "expo-router";

const Orders = () => {
  const router = useRouter();
  const [inputText, setInputText] = useState("");

  const fruits = [
    { id: "1", title: "Trunks" },
    { id: "2", title: "Vegeta" },
    { id: "3", title: "Gohan" },
  ];

  const handleSubmit = () => {
    Alert.alert("Submitted", inputText);
  };

  const ListHeader = () => (
    <>
      <Text
        style={{
          fontSize: 20,
          marginVertical: 10,
          alignSelf: "center",
        }}
      >
        This is Orders Page
      </Text>

      <Image
        source={require("../assets/images/1000.jpg")}
        style={{
          width: 300,
          height: 500,
          marginBottom: 10,
          alignSelf: "center",
        }}
      />
    </>
  );

  const ListFooter = () => (
    <>
      <SearchBar />

      <Text
        style={{
          fontSize: 20,
          marginVertical: 10,
          alignSelf: "center",
        }}
      >
        SEARCH SOMETHING
      </Text>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ marginVertical: 10, paddingHorizontal: 20 }}
      >
        <TextInput
          placeholder="Enter something..."
          value={inputText}
          onChangeText={setInputText}
          style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
        />

        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            backgroundColor: "#bce616",
            padding: 10,
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Text style={{ color: "black" }}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      {/* Wrapped the button to make it same width as HomeScreen buttons */}
      <View style={{ width: 250, alignSelf: "center", marginVertical: 5 }}>
        <Button
          title="Go Back Home"
          onPress={() => router.push("/")}
          color={"#4d8eb4"}
        />
      </View>
    </>
  );

  return (
    <FlatList
      data={fruits}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Text style={{ padding: 5, alignSelf: "center" }}>{item.title}</Text>
      )}
      ListHeaderComponent={ListHeader}
      ListFooterComponent={ListFooter} 
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
};

export default Orders;