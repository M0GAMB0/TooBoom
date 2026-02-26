/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";
const primaryColor = "#5B13EC";
const defaultColor = "#A492C9";
const cardBackgroundColorLight = "#fff";
const cardBackgroundColorDark = "#1F182F";
const whiteColor = "#fff";
const inactiveLight = "#94A3B8";
const inactiveDark = "#64748B";
const borderLight = "#5B13EC0D";
const borderDark = "#2F2348";
const streakColor = "#F97316";
const streakBadgeLight = "#FAF5FF";
const streakBadgeDark = "#1F182F";
const secondaryText = "#94A3B8";
const customRed = "#F87171";
const errorRed = "#EF4444";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#F9F5FF",
    tint: tintColorLight,
    icon: "#64748B",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    primary: primaryColor,
    default: defaultColor,
    cardBackground: cardBackgroundColorLight,
    white: whiteColor,
    tabInactive: inactiveLight,
    borderColor: borderLight,
    streak: streakColor,
    streakBadge: streakBadgeLight,
    secondaryText,
    customRed,
    errorRed,
  },
  dark: {
    text: "#ECEDEE",
    background: "#161022",
    tint: tintColorDark,
    icon: "#fff",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    primary: primaryColor,
    default: defaultColor,
    cardBackground: cardBackgroundColorDark,
    white: whiteColor,
    tabInactive: inactiveDark,
    borderColor: borderDark,
    streak: streakColor,
    streakBadge: streakBadgeDark,
    secondaryText,
    customRed,
    errorRed,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
