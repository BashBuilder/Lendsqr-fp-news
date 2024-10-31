import { appleProvider, auth, googleProvider } from "@/util/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  OAuthProvider,
} from "firebase/auth";
import { setLoading, setUser, setError } from "@/hooks/authSlice";
import { Dispatch } from "@reduxjs/toolkit";

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
    dispatch(setUser(userCredential.user));
    dispatch(setLoading(false));
    return { success: true };
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
    throw new Error("Something");
  }
};

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
    dispatch(setLoading(false));
    return { success: true };
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
    throw new Error("Something");
  }
};

export const signInWithGoogle = async (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    dispatch(setUser(result.user));
    dispatch(setLoading(false));
    return { success: true };
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
    throw new Error("Something");
  }
};

export const signInWithApple = async (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  try {
    const result = await signInWithPopup(auth, appleProvider);
    const credential = OAuthProvider.credentialFromResult(result);
    dispatch(setUser(result.user));
    dispatch(setLoading(false));
    return { success: true };
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
    throw new Error("Something");
  }
};
