import { AppText } from "@/components/ui/AppText";
import { FontStyles } from "@/constants/theme";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface FontStylePickerProps {
  colors: Record<string, string>;
  selectedFont: string;
  onSelect: (font: string) => void;
}

export default function FontStylePicker({
  colors,
  selectedFont,
  onSelect,
}: FontStylePickerProps) {
  return (
    <>
      <AppText
        className="text-xs font-bold mb-4 uppercase tracking-widest"
        style={{ color: colors.text }}
      >
        Font Style
      </AppText>
      <View
        className="rounded-3xl mb-10"
        style={{
          backgroundColor: colors.cardBackground,
          borderWidth: 1,
          borderColor: colors.borderColor,
        }}
      >
        {FontStyles.map((font, index) => (
          <TouchableOpacity
            key={font.id}
            onPress={() => onSelect(font.value)}
            className={`flex-row items-center justify-between p-5 ${
              index !== FontStyles.length - 1 ? "border-b" : ""
            }`}
            style={{ borderBottomColor: colors.borderColor }}
          >
            <AppText
              style={{ color: colors.text, fontFamily: font.value, fontSize: 16 }}
            >
              {font.displayName}
            </AppText>
            <View
              style={[
                styles.radioOuter,
                {
                  borderColor:
                    selectedFont === font.value
                      ? colors.primary
                      : colors.secondaryText,
                },
              ]}
            >
              {selectedFont === font.value && (
                <View
                  style={[styles.radioInner, { backgroundColor: colors.primary }]}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  radioInner: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
});
