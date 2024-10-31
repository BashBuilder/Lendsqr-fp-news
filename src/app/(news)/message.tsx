import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
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
      <View className="flex-1 bg-gray-100 p-4">
        <ScrollView className="flex-1">
          <View className="mb-4 flex gap-4">
            <View className="bg-blue-500 text-white p-3 rounded-lg self-start">
              <Text className="text-xl ">Hello! How can I help you today?</Text>
            </View>
            <View className="bg-gray-300 text-black p-3 rounded-lg self-end mt-2">
              <Text className="text-xl ">
                I need some assistance with my project.
              </Text>
            </View>
            <View className="bg-blue-500 text-white p-3 rounded-lg self-start">
              <Text className="text-xl ">Hello! How can I help you today?</Text>
            </View>
            <View className="bg-gray-300 text-black p-3 rounded-lg self-end mt-2">
              <Text className="text-xl ">
                I need some assistance with my project.
              </Text>
            </View>
            <View className="bg-blue-500 text-white p-3 rounded-lg self-start">
              <Text className="text-xl ">Hello! How can I help you today?</Text>
            </View>
            <View className="bg-gray-300 text-black p-3 rounded-lg self-end mt-2">
              <Text className="text-xl ">
                I need some assistance with my project.
              </Text>
            </View>
            <View className="bg-blue-500 text-white p-3 rounded-lg self-start">
              <Text className="text-xl ">Hello! How can I help you today?</Text>
            </View>
            <View className="bg-gray-300 text-black p-3 rounded-lg self-end mt-2">
              <Text className="text-xl ">
                I need some assistance with my project.
              </Text>
            </View>
            <View className="bg-blue-500 text-white p-3 rounded-lg self-start">
              <Text className="text-xl ">Hello! How can I help you today?</Text>
            </View>
            <View className="bg-gray-300 text-black p-3 rounded-lg self-end mt-2">
              <Text className="text-xl ">
                I need some assistance with my project.
              </Text>
            </View>
            <View className="bg-blue-500 text-white p-3 rounded-lg self-start">
              <Text className="text-xl ">Hello! How can I help you today?</Text>
            </View>
            <View className="bg-gray-300 text-black p-3 rounded-lg self-end mt-2">
              <Text className="text-xl ">
                I need some assistance with my project.
              </Text>
            </View>
            <View className="bg-blue-500 text-white p-3 rounded-lg self-start">
              <Text className="text-xl ">Hello! How can I help you today?</Text>
            </View>
            <View className="bg-gray-300 text-black p-3 rounded-lg self-end mt-2">
              <Text className="text-xl ">
                I need some assistance with my project.
              </Text>
            </View>
            <View className="bg-blue-500 text-white p-3 rounded-lg self-start">
              <Text className="text-xl ">Hello! How can I help you today?</Text>
            </View>
            <View className="bg-gray-300 text-black p-3 rounded-lg self-end mt-2">
              <Text className="text-xl ">
                I need some assistance with my project.
              </Text>
            </View>
            <View className="bg-blue-500 text-white p-3 rounded-lg self-start">
              <Text className="text-xl ">Hello! How can I help you today?</Text>
            </View>
            <View className="bg-gray-300 text-black p-3 rounded-lg self-end mt-2">
              <Text className="text-xl ">
                I need some assistance with my project.
              </Text>
            </View>
            <View className="bg-blue-500 text-white p-3 rounded-lg self-start">
              <Text className="text-xl ">Hello! How can I help you today?</Text>
            </View>
            <View className="bg-gray-300 text-black p-3 rounded-lg self-end mt-2">
              <Text className="text-xl ">
                I need some assistance with my project.
              </Text>
            </View>
            <View className="bg-blue-500 text-white p-3 rounded-lg self-start">
              <Text className="text-xl ">Hello! How can I help you today?</Text>
            </View>
            <View className="bg-gray-300 text-black p-3 rounded-lg self-end mt-2">
              <Text className="text-xl ">
                I need some assistance with my project.
              </Text>
            </View>
            <View className="bg-blue-500 text-white p-3 rounded-lg self-start">
              <Text className="text-xl ">Hello! How can I help you today?</Text>
            </View>
            <View className="bg-gray-300 text-black p-3 rounded-lg self-end mt-2">
              <Text className="text-xl ">
                I need some assistance with my project.
              </Text>
            </View>
            <View className="bg-blue-500 text-white p-3 rounded-lg self-start">
              <Text className="text-xl ">Hello! How can I help you today?</Text>
            </View>
            <View className="bg-gray-300 text-black p-3 rounded-lg self-end mt-2">
              <Text className="text-xl ">
                I need some assistance with my project.
              </Text>
            </View>
          </View>
          {/* Add more messages here */}
        </ScrollView>
        <View className="mt-4">
          <TextInput
            className="w-full p-3 border border-green-950/20 rounded-lg"
            placeholder="Type your message..."
          />
        </View>
      </View>
    </View>
  );
};

export default News;
