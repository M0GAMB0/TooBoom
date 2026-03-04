import { SettingsHeader } from "@/components/settings";
import { AppText } from "@/components/ui/AppText";
import { AccentColors, FontStyles } from "@/constants/theme";
import { useAppColors } from "@/hooks/use-app-colors";
import { useThemeMode } from "@/hooks/use-theme-mode";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppearanceScreen() {
  const { colors, isDark } = useAppColors();
  const { accentColor, setAccent, fontFamily: currentFont, setFont } = useThemeMode();
  const router = useRouter();

  const [tempAccent, setTempAccent] = useState(accentColor);
  const [tempFont, setTempFont] = useState(currentFont);

  const handleSave = () => {
    setAccent(tempAccent);
    setFont(tempFont);
    router.back();
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.background }}
      edges={["top"]}
    >
      <SettingsHeader title="Appearance" onBackPress={() => router.back()} />

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ justifyContent: "space-between", flex: 1 }} 
        className="flex-1 px-4 py-4"
      >
        <View>
            {/* ACCENT COLOR */}
            <AppText
              className="text-xs font-bold mb-4 uppercase tracking-widest"
              style={{ color: colors.text }}
            >
              Accent Color
            </AppText>
            <View
              className="flex-row justify-around items-center p-6 rounded-3xl mb-8"
              style={{ backgroundColor: colors.cardBackground, borderWidth: 1, borderColor: colors.borderColor }}
            >
              {AccentColors.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => {
                    setTempAccent(item.color);
                  }}
                  style={[
                    styles.colorCircle,
                    { backgroundColor: item.color },
                    tempAccent === item.color && { borderColor: colors.primary, borderWidth: 3 },
                  ]}
                >
                  {tempAccent === item.color && (
                    <View style={[styles.activeRing, { borderColor: item.color }]} />
                  )}
                </TouchableOpacity>
              ))}
            </View>
            {/* FONT STYLE */}
            <AppText
              className="text-xs font-bold mb-4 uppercase tracking-widest"
              style={{ color: colors.text }}
            >
              Font Style
            </AppText>
            <View
              className="rounded-3xl mb-10"
              style={{ backgroundColor: colors.cardBackground, borderWidth: 1, borderColor: colors.borderColor }}
            >
              {FontStyles.map((font, index) => (
                <TouchableOpacity
                  key={font.id}
                  onPress={() => {
                    setTempFont(font.value);
                  }}
                  className={`flex-row items-center justify-between p-5 ${
                    index !== FontStyles.length - 1 ? "border-b" : ""
                  }`}
                  style={{ borderBottomColor: colors.borderColor }}
                >
                  <AppText style={{ color: colors.text, fontFamily: font.value, fontSize: 16 }}>
                    {font.name}
                  </AppText>
                  <View
                    style={[
                      styles.radioOuter,
                      { borderColor: tempFont === font.value ? colors.primary : colors.secondaryText },
                    ]}
                  >
                    {tempFont === font.value && (
                      <View style={[styles.radioInner, { backgroundColor: colors.primary }]} />
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
        </View>

        {/* SAVE BUTTON */}
        <TouchableOpacity
          onPress={handleSave}
          className="py-4 rounded-2xl items-center mb-12"
          style={{ backgroundColor: colors.primary }}
        >
          <AppText className="text-white font-bold text-lg">
            Save Changes
          </AppText>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
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
