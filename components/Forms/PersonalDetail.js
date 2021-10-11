import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function PersonalDetail(props) {
  return (
    <View>
      <Text>This is Personal Detail Page</Text>
      <TouchableOpacity onPress={props.next}>
        <Text>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.prev}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
}
