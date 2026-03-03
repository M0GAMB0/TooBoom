import { RootState } from "@/src/redux/store";
import { loadThemeMode, setThemeMode, ThemeMode } from "@/src/redux/themeSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useThemeMode = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    // Load saved theme mode on mount
    const loadSavedTheme = async () => {
      try {
        const savedMode = await AsyncStorage.getItem("themeMode");
        if (savedMode && ["light", "dark", "system"].includes(savedMode)) {
          dispatch(loadThemeMode(savedMode as ThemeMode));
        }
      } catch (error) {
        console.error("Failed to load theme mode:", error);
      }
    };
    loadSavedTheme();
  }, [dispatch]);

  const setMode = (mode: ThemeMode) => {
    dispatch(setThemeMode(mode));
  };

  return {
    mode: themeMode,
    setMode,
  };
};
