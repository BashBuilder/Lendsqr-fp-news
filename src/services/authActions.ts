import { auth, googleProvider } from "@/util/firebase";
import { setLoading, setUser, setError } from "@/hooks/authSlice";
import { useNavigation } from "@react-navigation/native";

export const signInWithEmail = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      email,
      password
    );
    dispatch(setUser(userCredential.user));
    dispatch(setLoading(false));
    // Navigate to news
    useNavigation().navigate("news");
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

export const signUpWithEmail = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    dispatch(setUser(userCredential.user));
    dispatch(setLoading(false));
    // Navigate to news
    useNavigation().navigate("news");
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

export const signInWithGoogle = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const result = await auth.signInWithPopup(googleProvider);
    dispatch(setUser(result.user));
    dispatch(setLoading(false));
    // Navigate to news
    useNavigation().navigate("news");
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};
