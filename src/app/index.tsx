import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  return (
    // <SafeAreaView>
    <View className="flex flex-1 ">
      <Text className="text-3xl font-bold text-red-500">
        Initial project setup
      </Text>
    </View>
    // </SafeAreaView>
  );
}
