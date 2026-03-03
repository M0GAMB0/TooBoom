import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { Provider } from "react-redux";
import "../global.css";

import { Colors } from "@/constants/theme";
import { useAppColors } from "@/hooks/use-app-colors";
import { store } from "@/src/redux/store";
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";

export const unstable_settings = {
  anchor: "(tabs)",
};

function ThemedLayout() {
  const { colors, isDark } = useAppColors();
  const modalOptions = { presentation: "modal", title: "Modal" } as const;

  const CustomDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: Colors.dark.background,
      card: Colors.dark.background,
    },
  };

  const CustomDefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.light.background,
      card: Colors.light.background,
    },
  };

  const theme = isDark ? CustomDarkTheme : CustomDefaultTheme;

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(colors.background);
  }, [colors.background]);

  return (
    <ThemeProvider value={theme}>
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={modalOptions} />
        <Stack.Screen
          name="new-task"
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen name="settings" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style={isDark ? "light" : "dark"} />
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <ThemedLayout />
    </Provider>
  );
}
