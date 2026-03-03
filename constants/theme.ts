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

// Priority and Tag colors
const priorityHigh = "#EF4444";
const priorityHighBg = "#7F1D1D";
const priorityMed = "#F59E0B";
const priorityMedBg = "#78350F";
const priorityLow = "#10B981";
const priorityLowBg = "#064E3B";

const energyHigh = "#8B5CF6";
const energyHighBg = "#4C1D95";
const energyLow = "#FBBF24";
const energyLowBg = "#78350F";

const difficultyHard = "#6366F1";
const difficultyHardBg = "#312E81";
const difficultyMed = "#8B5CF6";
const difficultyMedBg = "#4C1D95";

const workCategory = "#3B82F6";
const personalCategory = "#EC4899";
const healthCategory = "#10B981";

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
    priorityHigh: priorityHigh,
    priorityHighBg: priorityHighBg + '33',
    priorityMed: priorityMed,
    priorityMedBg: priorityMedBg + '33',
    priorityLow: priorityLow,
    priorityLowBg: priorityLowBg + '33',
    energyHigh: energyHigh,
    energyHighBg: energyHighBg + '33',
    energyLow: energyLow,
    energyLowBg: energyLowBg + '33',
    difficultyHard: difficultyHard,
    difficultyHardBg: difficultyHardBg + '33',
    difficultyMed: difficultyMed,
    difficultyMedBg: difficultyMedBg + '33',
    categoryWork: workCategory,
    categoryPersonal: personalCategory,
    categoryHealth: healthCategory,
    shadow: "#c3c3c3",
    shadowLight: "#fdfdfd",
    gradientStart: "#7C3AED",
    gradientEnd: "#5B13EC",
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
    priorityHigh: "#F87171",
    priorityHighBg: "#450A0A33",
    priorityMed: "#FBBF24",
    priorityMedBg: "#451A0333",
    priorityLow: "#34D399",
    priorityLowBg: "#064E3B33",
    energyHigh: "#A78BFA",
    energyHighBg: "#2E106533",
    energyLow: "#FCD34D",
    energyLowBg: "#451A0333",
    difficultyHard: "#818CF8",
    difficultyHardBg: "#1E1B4B33",
    difficultyMed: "#A78BFA",
    difficultyMedBg: "#2E106533",
    categoryWork: workCategory,
    categoryPersonal: personalCategory,
    categoryHealth: healthCategory,
    shadow: "#000",
    shadowLight: "#2A1E40",
    gradientStart: "#7C3AED",
    gradientEnd: "#5B13EC",
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
