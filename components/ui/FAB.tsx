import { useAppColors } from "@/hooks/use-app-colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

type FABProps = {
  onPress: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  size?: number;
  style?: ViewStyle;
};

export function FAB({ onPress, icon = "add", size = 28, style }: FABProps) {
  const { colors } = useAppColors();

  return (
    <TouchableOpacity
      style={[
        styles.fab,
        {
          backgroundColor: colors.primary,
        },
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Ionicons name={icon} size={size} color={colors.white} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
