import { SettingsHeader } from "@/components/settings";
import { AccentColors, FontStyles } from "@/constants/theme";
import { useAppColors } from "@/hooks/use-app-colors";
import { useThemeMode } from "@/hooks/use-theme-mode";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppearanceScreen() {
  const { colors, isDark, fontFamily } = useAppColors();
  const { mode, setMode, accentColor, setAccent, fontFamily: currentFont, setFont } = useThemeMode();
  const router = useRouter();

  const [tempMode, setTempMode] = useState(mode);
  const [tempAccent, setTempAccent] = useState(accentColor);
  const [tempFont, setTempFont] = useState(currentFont);

  const handleSave = () => {
    setMode(tempMode);
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

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 px-4 py-4">

        {/* ACCENT COLOR */}
        <Text
          className="text-xs font-bold mb-4 uppercase tracking-widest"
          style={{ color: colors.text, fontFamily }}
        >
          Accent Color
        </Text>
        <View
          className="flex-row justify-around items-center p-6 rounded-3xl mb-8"
          style={{ backgroundColor: colors.cardBackground, borderWidth: 1, borderColor: colors.borderColor }}
        >
          {AccentColors.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => setTempAccent(item.color)}
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
        <Text
          className="text-xs font-bold mb-4 uppercase tracking-widest"
          style={{ color: colors.text, fontFamily }}
        >
          Font Style
        </Text>
        <View
          className="rounded-3xl mb-10"
          style={{ backgroundColor: colors.cardBackground, borderWidth: 1, borderColor: colors.borderColor }}
        >
          {FontStyles.map((font, index) => (
            <TouchableOpacity
              key={font.id}
              onPress={() => setTempFont(font.value)}
              className={`flex-row items-center justify-between p-5 ${
                index !== FontStyles.length - 1 ? "border-b" : ""
              }`}
              style={{ borderBottomColor: colors.borderColor }}
            >
              <Text style={{ color: colors.text, fontFamily: font.value, fontSize: 16 }}>
                {font.name}
              </Text>
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

        {/* SAVE BUTTON */}
        <TouchableOpacity
          onPress={handleSave}
          className="py-4 rounded-2xl items-center mb-10"
          style={{ backgroundColor: colors.primary }}
        >
          <Text className="text-white font-bold text-lg" style={{ fontFamily }}>
            Save Changes
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function ModeCard({ title, isActive, onPress, colors, isDark, fontFamily }: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ width: "47%" }}
      activeOpacity={0.8}
    >
      <View
        className="rounded-3xl p-4 aspect-[4/5] justify-between relative"
        style={{
          backgroundColor: isDark ? "#1F182F" : "#fff",
          borderWidth: 2,
          borderColor: isActive ? colors.primary : colors.borderColor,
        }}
      >
        {/* Mock Content */}
        <View className="space-y-2">
          <View className="h-2 w-20 rounded-full" style={{ backgroundColor: isDark ? "#2D2342" : "#F3F4F6" }} />
          <View className="h-16 w-full rounded-xl" style={{ backgroundColor: isDark ? "#161022" : "#F9FAFB", borderWidth: 1, borderColor: isDark ? "#2D2342" : "#F3F4F6" }} />
          <View className="h-2 w-12 rounded-full" style={{ backgroundColor: isDark ? "#2D2342" : "#F3F4F6" }} />
        </View>

        <View className="items-center">
            <View 
                className="w-8 h-8 rounded-full border-2 items-center justify-center"
                style={{ borderColor: isActive ? colors.primary : colors.borderColor }}
            >
                {isActive && <View className="w-5 h-5 rounded-full" style={{ backgroundColor: colors.primary }} />}
            </View>
        </View>
      </View>
      <Text
        className="text-center mt-3 font-medium"
        style={{ color: isActive ? colors.primary : colors.secondaryText, fontFamily }}
      >
        {title}
      </Text>
    </TouchableOpacity>
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
