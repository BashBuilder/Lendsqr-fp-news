import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import logo from "src/assets/images/Splash_Screen_2-removebg-preview.png";
import { useDispatch } from "react-redux";
import { signUpWithEmail } from "@/services/authActions";
import ToastManager, { Toast } from "toastify-react-native";
import { useSelector } from "react-redux";
import { RootState } from "@/hooks/store";

export default function SignUp() {
  const { top } = useSafeAreaInsets();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const auth = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      if (!email || !password) {
        throw new Error("Kindly fill all the fields");
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error("Please enter a valid email address");
      }
      if (password.length < 6) {
        throw new Error("Password should be at least 6 characters long");
      }
      await signUpWithEmail(email, password, dispatch);
      Toast.success("Signup successful!");
      router.push("/news");
    } catch (error) {
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        Toast.error("User already exists.");
        return;
      }
      console.error(error.message);
      Toast.error(error.message);
    }
  };

  return (
    <View
      style={{ paddingTop: top }}
      className="flex items-center -mt-10 justify-center flex-1 gap-14 bg-green-50"
    >
      <ToastManager />
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
          <Text className="text-white text-2xl font-bold">
            {auth.loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              "Sign Up"
            )}
          </Text>
        </TouchableOpacity>
      </View>
      <Link href={"/(auth)/providers"}>
        <Text className="text-green-950 text-xl font-bold">
          Already have an account? sign in
        </Text>
      </Link>
    </View>
  );
}
