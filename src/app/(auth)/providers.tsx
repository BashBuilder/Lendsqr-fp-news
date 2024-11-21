import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import logo from "src/assets/images/Splash_Screen_2-removebg-preview.png";
import apple from "src/assets/images/apple.png";
import google from "src/assets/images/Logo-google-icon-PNG-removebg-preview.png";
// import { signInWithApple, signInWithGoogle } from "@/services/authActions";
import ToastManager, { Toast } from "toastify-react-native";
import { signInWithGoogle } from "@/services/googleSignin";

export default function AuthProviders() {
  const { top } = useSafeAreaInsets();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState({ apple: false, google: false });
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      setLoading((prev) => ({ ...prev, google: true }));
      await signInWithGoogle(dispatch);
      router.push("/(news)/news");
    } catch (error) {
      console.log(error);
      Toast.error(error);
    } finally {
      setLoading((prev) => ({ ...prev, google: false }));
    }
  };

  const handleAppleSignIn = async () => {
    try {
      setLoading((prev) => ({ ...prev, apple: true }));
      // await signInWithApple(dispatch);
      console.log("sucess");
    } catch (error) {
      Toast.error(error);
      console.log(error);
    } finally {
      setLoading((prev) => ({ ...prev, apple: false }));
    }
  };

  const handleRedirectToPasswordSignUp = () => {
    router.push("/(auth)/signin-email");
  };

  return (
    <View
      style={{ paddingTop: top }}
      className="flex items-center  justify-center flex-1 gap-14 bg-green-50"
    >
      <ToastManager />
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
          className=" border border-green-950 px-4 py-4 rounded-full justify-center w-10/12 flex flex-row  items-center"
        >
          {loading.google ? (
            <ActivityIndicator size="small" color="green" />
          ) : (
            <View className="flex flex-row gap-2 justify-center items-center">
              <Image
                source={google}
                style={{ width: 28, height: 28, resizeMode: "contain" }}
              />
              <Text className="text-slate-800 text-2xl font-bold">
                Sign in with Google
              </Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleAppleSignIn}
          className=" border border-green-950 px-4 py-4 rounded-full justify-center w-10/12 flex flex-row gap-2 items-center"
        >
          {loading.apple ? (
            <ActivityIndicator size="small" color="green" />
          ) : (
            <View className="flex flex-row gap-2 justify-center items-center">
              <Image
                source={apple}
                style={{ width: 28, height: 28, resizeMode: "contain" }}
              />
              <Text className="text-slate-800 text-2xl font-bold">
                Sign in with apple
              </Text>
            </View>
          )}
        </TouchableOpacity>
        <View className="flex items-center">
          <Text className="mt-4 mb-6">or</Text>
          <View className="w-screen flex gap-8 items-center justify-center ">
            <TouchableOpacity
              onPress={handleRedirectToPasswordSignUp}
              className="bg-green-800 px-4 py-6 rounded-full justify-center w-10/12 flex items-center"
            >
              <Text className="text-white text-2xl font-bold">
                Sign in with email
              </Text>
            </TouchableOpacity>

            <Link href={"/(auth)/signup"}>
              <Text className="text-green-950 text-xl font-bold">
                Don't have an account? sign up
              </Text>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}
