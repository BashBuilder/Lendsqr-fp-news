import { Link } from "expo-router";
import React from "react";
import { useDispatch } from "react-redux";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import logo from "src/assets/images/Splash_Screen_2-removebg-preview.png";
import apple from "src/assets/images/apple.png";
import google from "src/assets/images/Logo-google-icon-PNG-removebg-preview.png";
import { signInWithApple, signInWithGoogle } from "@/services/authActions";

export default function Page() {
  const { top } = useSafeAreaInsets();
  const dispatch = useDispatch();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle(dispatch);
      console.log("sucess");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAppleSignIn = async () => {
    try {
      await signInWithApple(dispatch);
      console.log("sucess");
    } catch (error) {
      console.log(error);
    }
  };

  const handleRedirectToPasswordSignUp = () => {
    // Add your redirect to password page logic here
    console.log("Redirect to Password Sign Up Clicked");
  };

  return (
    <View
      style={{ paddingTop: top }}
      className="flex items-center  justify-center flex-1 gap-14 bg-green-50"
    >
      <Image
        source={logo}
        style={{ width: 200, height: 200, resizeMode: "contain" }}
      />
      <Text className="text-2xl font-semibold text-center text-green-950/70">
        Welcome! Let's dive into your account
      </Text>

      <View className="flex w-screen gap-5 items-center justify-center">
        <TouchableOpacity
          onPress={handleGoogleSignIn}
          className=" border border-green-950 px-4 py-4 rounded-full justify-center w-10/12 flex flex-row gap-2 items-center"
        >
          <Image
            source={google}
            style={{ width: 28, height: 28, resizeMode: "contain" }}
          />
          <Text className="text-slate-800 text-2xl font-bold">
            Sign in with Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleAppleSignIn}
          className=" border border-green-950 px-4 py-4 rounded-full justify-center w-10/12 flex flex-row gap-2 items-center"
        >
          <Image
            source={apple}
            style={{ width: 28, height: 28, resizeMode: "contain" }}
          />
          <Text className="text-slate-800 text-2xl font-bold">
            Sign in with apple
          </Text>
        </TouchableOpacity>
      </View>

      <Text>or</Text>

      <View className="w-screen flex gap-8 items-center justify-center ">
        <TouchableOpacity
          onPress={handleRedirectToPasswordSignUp}
          className="bg-green-800 px-4 py-6 rounded-full justify-center w-10/12 flex items-center"
        >
          <Text className="text-white text-2xl font-bold">
            Sign in with email
          </Text>
        </TouchableOpacity>

        <Link href={""}>
          <Text className="text-green-950 text-xl font-bold">
            Don't have an account? sign up
          </Text>
        </Link>
      </View>
    </View>
  );
}
