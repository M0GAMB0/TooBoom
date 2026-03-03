import React from "react";
import { View } from "react-native";

interface NeumorphicCardProps {
  children: React.ReactNode;
  colors: any;
  style?: any;
}
export const NeumorphicCard = ({ children, colors, style }: NeumorphicCardProps) => {
  const isDark = colors.background === "#161022"; // Simple check or pass isDark prop

  const darkShadowColor = colors.shadow;
  const lightShadowColor = colors.shadowLight;

  return (
    <View
      style={[
        style,
      ]}
      className="rounded-2xl shadow-2xl"
    >
      <View
        style={{
          shadowColor: lightShadowColor,
          shadowOffset: { width: -24, height: -24 },
          shadowOpacity: 1,
          shadowRadius: 50,
          backgroundColor: colors.background,
        }}
        className="rounded-2xl"
      >
        {children}
      </View>
    </View>
  );
};
