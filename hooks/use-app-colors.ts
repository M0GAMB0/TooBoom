import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useThemeMode } from "@/hooks/use-theme-mode";

export function useAppColors() {
  const systemColorScheme = useColorScheme() ?? "light";
  const { mode, accentColor, fontFamily } = useThemeMode();

  // If mode is "system", use system default, otherwise use the selected mode
  const isDark =
    mode === "system" ? systemColorScheme === "dark" : mode === "dark";

  const themeColors = isDark ? Colors.dark : Colors.light;

  return {
    isDark,
    colors: {
      ...themeColors,
      primary: accentColor || themeColors.primary,
    },
    fontFamily,
  };
}
