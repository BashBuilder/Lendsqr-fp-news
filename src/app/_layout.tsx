import "../global.css";
import { Slot, Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "src/hooks/store";

export default function Layout() {
  return (
    <Provider store={store}>
      <Slot />
    </Provider>
  );
}
