import React, { useState } from "react";
import {
  Text,
  Image,
  Button,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Modal,
  View,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import SearchBar from "../components/SearchBar";

const HomeScreen = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState("");

  const fruits = [
    { id: "1", title: "LIST:" },
    { id: "2", title: "Valorant" },
    { id: "3", title: "Dota 2" },
    { id: "4", title: "Puso" },
  ];

  const handleSubmit = () => {
    Alert.alert("Submitted", inputText);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    Alert.alert("Modal closed", "The modal has been closed");
  };

  // Component rendered above the FlatList items
  const ListHeader = () => (
    <>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 10,
          textAlign: "center",
          paddingHorizontal: 20,
        }}
      >
        This is Guko Home Screen
      </Text>

      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../assets/images/GUKO.jpg")}
          style={{ width: 300, height: 500, marginBottom: 10 }}
        />
      </View>

      <SearchBar />

      <Button
        title="Go to Orders"
        onPress={() => router.push("/orders")}
        color={"#0a0c1c"}
      />

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

      <Button
        title="Show Modal"
        onPress={() => setModalVisible(true)}
        color={"#ce2121f9"}
      />
    </>
  );

  return (
    <>
      <FlatList
        data={fruits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={{ padding: 5, alignSelf: "center" }}>{item.title}</Text>
        )}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={handleCloseModal}
        onDismiss={() => Alert.alert("Modal Closed", "The modal has been closed")}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              width: 250,
            }}
          >
            <Text style={{ marginBottom: 10 }}>This is a modal</Text>
            <Button title="Close Modal" onPress={handleCloseModal} />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default HomeScreen;