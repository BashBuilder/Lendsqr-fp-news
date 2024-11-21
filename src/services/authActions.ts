import { appleProvider, auth, googleProvider } from "@/util/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  OAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { setLoading, setUser, setError } from "@/hooks/authSlice";
import { Dispatch } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const signInWithEmail = async (
  email: string,
  password: string,
  dispatch: Dispatch
) => {
  dispatch(setLoading(true));
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    await AsyncStorage.setItem("@user", JSON.stringify(userCredential.user));
    dispatch(setUser(userCredential.user));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    throw new Error(error.message);
  }
};
// console.log("added some random consolel log")

export const signUpWithEmail = async (
  email: string,
  password: string,
  dispatch: Dispatch
) => {
  dispatch(setLoading(true));
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    dispatch(setUser(userCredential.user));
    await AsyncStorage.setItem("@user", JSON.stringify(userCredential.user));
    dispatch(setLoading(false));
    return { success: true };
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
    throw new Error(error.message);
  }
};

// export const signInWithGoogle = async (dispatch: Dispatch) => {
//   dispatch(setLoading(true));
//   try {
//     const result = await signInWithRedirect(auth, googleProvider);
//     // const credential = GoogleAuthProvider.credentialFromResult(result);
//     // dispatch(setUser(result.user));
//     // await AsyncStorage.setItem("@user", JSON.stringify(result.user));
//     // dispatch(setLoading(false));
//     return { success: true };
//   } catch (error) {
//     dispatch(setError(error.message));
//     dispatch(setLoading(false));
//     throw error.message;
//   }
// };

export const signInWithApple = async (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  try {
    const result = await signInWithPopup(auth, appleProvider);
    const credential = OAuthProvider.credentialFromResult(result);
    await AsyncStorage.setItem("@user", JSON.stringify(credential.accessToken));
    dispatch(setUser(result.user));
    dispatch(setLoading(false));
    return { success: true };
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
    throw error.message;
  }
};
