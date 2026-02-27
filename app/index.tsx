import React, { useState } from "react";
import {
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Modal,
  View,
  Alert,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import SearchBar from "../components/SearchBar";

const HomeScreen = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleSubmit = () => {
    Alert.alert("Submitted", inputText);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    Alert.alert("Modal closed", "The modal has been closed");
  };

  return (
    <>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/*  Title */}
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

        {/* Image */}
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/images/GUKO.jpg")}
            style={{ width: 300, height: 500, marginBottom: 10 }}
          />
        </View>

        {/*  SearchBar */}
        <SearchBar />

        {/* TextInput + Submit button */}
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
              backgroundColor: "#130a64",
              padding: 10,
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Text style={{ color: "white" }}>Submit</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

        {/* Go to Orders button */}
        <View style={{ width: 250, alignSelf: "center", marginVertical: 5 }}>
          <Button
            title="Go to Orders"
            onPress={() => router.push("/orders")}
            color={"#858693"}
          />
        </View>

        {/* Show Modal button */}
        <View style={{ width: 250, alignSelf: "center", marginVertical: 5 }}>
          <Button
            title="Show Modal"
            onPress={() => setModalVisible(true)}
            color={"#b67734f9"}
          />
        </View>
      </ScrollView>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={handleCloseModal}
        onDismiss={() =>
          Alert.alert("Modal Closed", "The modal has been closed")
        }
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