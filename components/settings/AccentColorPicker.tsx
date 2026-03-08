import { AppText } from "@/components/ui/AppText";
import { AccentColors } from "@/constants/theme";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface AccentColorPickerProps {
  colors: Record<string, string>;
  selectedColor: string;
  onSelect: (color: string) => void;
}

export default function AccentColorPicker({
  colors,
  selectedColor,
  onSelect,
}: AccentColorPickerProps) {
  return (
    <>
      <AppText
        className="text-xs font-bold mb-4 uppercase tracking-widest"
        style={{ color: colors.text }}
      >
        Accent Color
      </AppText>
      <View
        className="flex-row justify-around items-center p-6 rounded-3xl mb-8"
        style={{
          backgroundColor: colors.cardBackground,
          borderWidth: 1,
          borderColor: colors.borderColor,
        }}
      >
        {AccentColors.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => onSelect(item.color)}
            style={[
              styles.colorCircle,
              { backgroundColor: item.color },
              selectedColor === item.color && {
                borderColor: item.color,
                borderWidth: 3,
              },
            ]}
          >
            {selectedColor === item.color && (
              <View style={[styles.activeRing, { borderColor: item.color }]} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  colorCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  activeRing: {
    position: "absolute",
    top: -6,
    left: -6,
    right: -6,
    bottom: -6,
    borderRadius: 30,
    borderWidth: 2,
  },
});
