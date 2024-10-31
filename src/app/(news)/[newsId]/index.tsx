import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import image from "src/assets/images/Image11.png";
import { Link, Stack, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const newsList = {
  title: "Experience the Serenity of Japan's Traditional Countryside",
  image,
  url: "/",
  details:
    "Experience the Serenity of Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside",
};

const News = () => {
  const router = useRouter();
  // const { top } = useSafeAreaInsets();
  return (
    <View className="p-4 bg-green-50 flex-1 flex relative ">
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#16a34a",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackVisible: false,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back-sharp" size={25} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              className="flex flex-row gap-2 items-center"
            >
              <Ionicons name="alert-circle" size={30} color="red" />
            </TouchableOpacity>
          ),
        }}
      />
      <TouchableOpacity
        onPress={() => {}}
        className="absolute w-20 h-20 flex items-center justify-center rounded-full bg-green-200 z-50 bottom-8 right-4 "
      >
        <Ionicons name="chatbox" size={40} color="green" />
      </TouchableOpacity>

      <ScrollView className="flex-1 flex ">
        <View className="flex gap-5 ">
          <Image
            source={newsList.image}
            style={{ width: "auto", height: 350, resizeMode: "cover" }}
          />

          <Text className="text-green-950 font-semibold text-3xl">
            {newsList.title}
          </Text>
          <Text className="text-xl">{newsList.details}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default News;
