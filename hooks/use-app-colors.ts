/**
 * Custom hook to get the app colors based on the current color scheme
 */

import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export function useAppColors() {
  const colorScheme = useColorScheme() ?? "light";
  const isDark = colorScheme === "dark";
  //   const isDark = false;

  return {
    isDark,
    colors: isDark ? Colors.dark : Colors.light,
  };
}
