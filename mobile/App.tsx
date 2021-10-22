import React from "react";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { theme } from "./src/styles/theme";

import { ThemeProvider } from "styled-components";

import { Home } from "./src/screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
