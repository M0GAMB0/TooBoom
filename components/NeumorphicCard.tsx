import React from "react";
import { View } from "react-native";

interface NeumorphicCardProps {
  children: React.ReactNode;
  colors: any;
  style?: any;
}
export const NeumorphicCard = ({ children, colors, style }: NeumorphicCardProps) => {
  return (
    <View
      style={[
        {
          shadowColor: "#000",
          shadowOffset: { width: 6, height: 6 },
          shadowOpacity: 0.25,
          shadowRadius: 8,
          backgroundColor: colors.background,
        },
        style,
      ]}
      className="rounded-2xl"
    >
      <View
        style={{
          shadowColor: "#FFF",
          shadowOffset: { width: -6, height: -6 },
          shadowOpacity: 0.8,
          shadowRadius: 8,
          backgroundColor: colors.background,
        }}
        className="rounded-2xl"
      >
        {children}
      </View>
    </View>
  );
};
