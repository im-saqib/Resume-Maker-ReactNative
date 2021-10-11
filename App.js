import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

import Welcome from "./components/Welcome";
import styles from "./styles/styles";

export default function App() {
  return (
    <View style={styles.root}>
      <Welcome />
      {/* <StatusBar style='auto' /> */}
    </View>
  );
}
