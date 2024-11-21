import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId:
    "5585564632-900u42dteul4g9j0dbos2hpe5811tc69.apps.googleusercontent.com",
});

export const signInWithGoogle = async (dispatch) => {
  try {
    await GoogleSignin.hasPlayServices();
    const response = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(
      response.data.idToken
    );
    const result = await auth().signInWithCredential(googleCredential);
    console.log("Google Sign In success", result);
  } catch (error) {
    console.error(error);
  }
};
