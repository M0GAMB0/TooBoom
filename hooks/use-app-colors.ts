/**
 * Custom hook to get the app colors based on the current color scheme
 */

import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useThemeMode } from "@/hooks/use-theme-mode";

export function useAppColors() {
  const systemColorScheme = useColorScheme() ?? "light";
  const { mode } = useThemeMode();

  // If mode is "system", use system default, otherwise use the selected mode
  const isDark =
    mode === "system" ? systemColorScheme === "dark" : mode === "dark";

  return {
    isDark,
    colors: isDark ? Colors.dark : Colors.light,
  };
}
