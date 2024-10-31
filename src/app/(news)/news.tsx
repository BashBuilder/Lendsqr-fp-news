import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import image from "src/assets/images/Image11.png";
import { Link, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { fetchNews } from "@/util/request";
import ToastManager, { Toast } from "toastify-react-native";

const newsList = [
  {
    title: "Experience the Serenity of Japan's Traditional Countryside",
    image,
    url: "/",
    details:
      "Experience the Serenity of Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside",
  },
  {
    title: "Experience the Serenity of Japan's Traditional Countryside",
    image,
    url: "/",
    details:
      "Experience the Serenity of Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside",
  },
  {
    title: "Experience the Serenity of Japan's Traditional Countryside",
    image,
    url: "/",
    details:
      "Experience the Serenity of Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside",
  },
  {
    title: "Experience the Serenity of Japan's Traditional Countryside",
    image,
    url: "/",
    details:
      "Experience the Serenity of Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside",
  },
  {
    title: "Experience the Serenity of Japan's Traditional Countryside",
    image,
    url: "/",
    details:
      "Experience the Serenity of Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside Japan's Traditional Countryside Experience the Serenity of Japan's Traditional Countryside",
  },
];

const News = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [newsData, setNewsData] = useState<NewsTypes[] | null>(null);
  const news = [];
  const fetchData = async () => {
    try {
      setIsFetching(true);
      const data: NewsTypes[] = await fetchNews();
      setNewsData(data);
      setIsFetching(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();

    // cleanup function
    return () => {
      fetchData();
      // cleanup code here
    };
  }, []);

  // const { top } = useSafeAreaInsets();
  return (
    <View className="p-4 bg-green-50 flex-1 flex relative ">
      <Stack.Screen
        options={{
          title: "News App",
          headerStyle: {
            backgroundColor: "#16a34a",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}}>
              <Image
                className="pr-4 "
                source={require("src/assets/images/copy_splach-removebg-preview.png")}
                style={{ width: 25, height: 25, resizeMode: "contain" }}
              />
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

      <ScrollView className="flex-1 text-green-600 flex gap-4">
        <FlatList
          keyExtractor={(item) => item.title}
          data={newsList}
          className="flex gap-10"
          renderItem={({ item }) => (
            <View className=" mb-10 bg-white shadow-md flex gap-3 overflow-hidden rounded-2xl">
              <Image
                source={item.image}
                className="rounded-2xl"
                style={{ width: "auto", height: 200, resizeMode: "cover" }}
              />
              <View className="flex gap-2">
                <Text className="font-bold text-4xl text-green-950 line-clamp-1">
                  {item.title}
                </Text>
                <Text className="text-xl  text-green-900 line-clamp-3">
                  {item.details}
                </Text>
                <TouchableOpacity className="bg-green-800 px-4 py-3 rounded-xl justify-center flex items-center">
                  <Text className="text-white text-2xl font-bold">
                    Readmore
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default News;
