import { getFontFamily } from "@/constants/theme";
import { useAppColors } from "@/hooks/use-app-colors";
import React from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";

export interface AppTextProps extends RNTextProps {
  children?: React.ReactNode;
  /** Use "bold" to get the actual bold font file instead of synthetic fontWeight */
  weight?: "regular" | "bold";
}

/**
 * A wrapper around React Native's Text component that automatically
 * applies the global font family from the theme.
 *
 * Use the `weight` prop instead of `fontWeight` in styles to avoid
 * the text-shrinking bug with custom fonts.
 */
export function AppText({ weight = "regular", ...props }: AppTextProps) {
  const { fontFamily } = useAppColors();
  const { style, ...rest } = props;

  const resolvedFont = getFontFamily(fontFamily, weight);

  return (
    <RNText
      {...rest}
      style={[
        { fontFamily: resolvedFont },
        style,
      ]}
    />
  );
}
