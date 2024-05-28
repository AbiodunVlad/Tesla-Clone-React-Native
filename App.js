import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
// import CarItem from "./components/CarItems";
import CarsList from "./components/CarsList";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CarItem
        name={"Model X"}
        tagLine={"Order Online For"}
        tagLineCTA={"Touchless Delivery"}
        image={require("./assets/images/ModelX.jpeg")}
      /> */}

      <Header />
      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
