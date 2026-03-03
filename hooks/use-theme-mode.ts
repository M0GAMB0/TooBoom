import { RootState } from "@/src/redux/store";
import {
    loadAccentColor,
    loadFontFamily,
    loadThemeMode,
    setAccentColor,
    setFontFamily,
    setThemeMode,
    ThemeMode,
} from "@/src/redux/themeSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useThemeMode = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    // Load saved theme settings on mount
    const loadSavedSettings = async () => {
      try {
        const [savedMode, savedAccent, savedFont] = await Promise.all([
          AsyncStorage.getItem("themeMode"),
          AsyncStorage.getItem("accentColor"),
          AsyncStorage.getItem("fontFamily"),
        ]);

        if (savedMode && ["light", "dark", "system"].includes(savedMode)) {
          dispatch(loadThemeMode(savedMode as ThemeMode));
        }
        if (savedAccent) {
          dispatch(loadAccentColor(savedAccent));
        }
        if (savedFont) {
          dispatch(loadFontFamily(savedFont));
        }
      } catch (error) {
        console.error("Failed to load theme settings:", error);
      }
    };
    loadSavedSettings();
  }, [dispatch]);

  const setMode = (mode: ThemeMode) => dispatch(setThemeMode(mode));
  const setAccent = (color: string) => dispatch(setAccentColor(color));
  const setFont = (font: string) => dispatch(setFontFamily(font));

  return {
    mode: theme.mode,
    accentColor: theme.accentColor,
    fontFamily: theme.fontFamily,
    setMode,
    setAccent,
    setFont,
  };
};
