import { useAppColors } from "@/hooks/use-app-colors";
import React from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";

export interface AppTextProps extends RNTextProps {
  children?: React.ReactNode;
}

/**
 * A wrapper around React Native's Text component that automatically
 * applies the global font family from the theme.
 */
export function AppText(props: AppTextProps) {
  const { fontFamily } = useAppColors();
  const { style, ...rest } = props;

  return (
    <RNText
      {...rest}
      style={[
        { fontFamily },
        style,
      ]}
    />
  );
}
