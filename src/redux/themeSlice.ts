import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeMode = "light" | "dark" | "system";

interface ThemeState {
  mode: ThemeMode;
  accentColor: string;
  fontFamily: string;
}

const initialState: ThemeState = {
  mode: "system",
  accentColor: "#5B13EC",
  fontFamily: "Inter_400Regular",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
      // Persist to AsyncStorage
      AsyncStorage.setItem("themeMode", action.payload);
    },
    loadThemeMode: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
    },
    setAccentColor: (state, action: PayloadAction<string>) => {
      state.accentColor = action.payload;
      AsyncStorage.setItem("accentColor", action.payload);
    },
    setFontFamily: (state, action: PayloadAction<string>) => {
      state.fontFamily = action.payload;
      AsyncStorage.setItem("fontFamily", action.payload);
    },
    loadAccentColor: (state, action: PayloadAction<string>) => {
      state.accentColor = action.payload;
    },
    loadFontFamily: (state, action: PayloadAction<string>) => {
      state.fontFamily = action.payload;
    },
  },
});

export const {
  setThemeMode,
  loadThemeMode,
  setAccentColor,
  setFontFamily,
  loadAccentColor,
  loadFontFamily,
} = themeSlice.actions;
export default themeSlice.reducer;
