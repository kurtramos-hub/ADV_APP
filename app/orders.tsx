import { Text, View, Button,Image } from "react-native";
import SearchBar from "../components/SearchBar";
import { useRouter } from "expo-router";

const Orders = () => {
  const router = useRouter();
  return (

    
    <View style={{ padding: 20 }}>
        <Image
          source={require("../assets/images/1000.jpg")}
          style={{ width: 300, height: 500, marginBottom: 10 }}
          alignSelf="center"
        />
      <SearchBar />
      <Text style={{ fontSize:20, marginVertical:10, alignSelf: "center" }}>This is Orders Page</Text>
      <Button title="Go Back Home" onPress={() => router.push("/")} 
        color={"black"}
        />
    </View>

    
  );
};

export default Orders;