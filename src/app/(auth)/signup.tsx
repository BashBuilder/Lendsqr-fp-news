import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import logo from "src/assets/images/Splash_Screen_2-removebg-preview.png";
import { useDispatch, useSelector } from "react-redux";
import { signUpWithEmail } from "@/services/authActions";

export default function Page() {
  const { top } = useSafeAreaInsets();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignUp = () => {
    dispatch(signUpWithEmail(email, password));
  };

  return (
    <View
      style={{ paddingTop: top }}
      className="flex items-center -mt-10 justify-center flex-1 gap-14 bg-green-50"
    >
      <Image
        source={logo}
        style={{ width: 200, height: 200, resizeMode: "contain" }}
      />
      <Text className="text-2xl font-semibold text-center text-green-950/70">
        Welcome! Sign up for latest news
      </Text>

      <View className="flex w-screen gap-5 items-center justify-center ">
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          className="border border-green-950 pl-8 pr-4 py-4 rounded-full w-10/12"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          className="border border-green-950 pl-8 pr-4 py-4 rounded-full w-10/12"
          secureTextEntry
          autoCapitalize="none"
        />
        <TouchableOpacity
          onPress={handleSignUp}
          className="bg-green-800 px-4 py-6 rounded-full justify-center w-10/12 flex items-center"
        >
          <Text className="text-white text-2xl font-bold">Sign In</Text>
        </TouchableOpacity>
      </View>
      <Link href={""}>
        <Text className="text-green-950 text-xl font-bold">
          Already have an account? sign in
        </Text>
      </Link>
    </View>
  );
}
