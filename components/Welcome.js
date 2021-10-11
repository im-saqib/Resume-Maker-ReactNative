import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "../styles/styles";

import PersonalDetail from "./Forms/PersonalDetail";

export default function Welcome() {
  const [step, setStep] = useState(0);
  const next = () => {
    setStep(step + 1);
  };
  const previous = () => {
    setStep(step - 1);
  };
  switch (step) {
    case 0:
      return (
        <View>
          <Text>Welcome to Resume Maker Mobile</Text>
          <TouchableOpacity onPress={next}>
            <Text>Start Building</Text>
          </TouchableOpacity>
        </View>
      );
      break;
    case 1:
      return <PersonalDetail next={next} prev={previous} />;
      break;

    default:
      setStep(0);
      break;
  }
}
