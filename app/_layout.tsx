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
import { Inter_400Regular, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";
import { Merriweather_400Regular, Merriweather_700Bold } from "@expo-google-fonts/merriweather";
import { RobotoMono_400Regular, RobotoMono_700Bold } from "@expo-google-fonts/roboto-mono";
import * as SplashScreen from 'expo-splash-screen';
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: "(tabs)",
};

function ThemedLayout() {
  const { colors, isDark, fontFamily } = useAppColors();
  
  const [loaded, error] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Merriweather_400Regular,
    Merriweather_700Bold,
    RobotoMono_400Regular,
    RobotoMono_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(colors.background);
  }, [colors.background]);

  if (!loaded && !error) {
    return null;
  }

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

  return (
    <ThemeProvider value={theme}>
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTitleStyle: {
            fontFamily: fontFamily,
          }
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal", title: "Modal" }} />
        <Stack.Screen
          name="new-task"
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen name="settings" options={{ headerShown: false }} />
        <Stack.Screen name="appearance" options={{ headerShown: false }} />
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
