import { Platform } from "react-native";

export const neumorphic = (
  background: string,
  darkShadow: string,
  lightShadow: string,
) => ({
  backgroundColor: background,

  shadowColor: darkShadow,
  shadowOffset: { width: 6, height: 6 },
  shadowOpacity: 0.6,
  shadowRadius: 8,

  elevation: Platform.OS === "android" ? 8 : 0,
});
