import {
  AccentColorPicker,
  FontStylePicker,
  SettingsHeader,
} from "@/components/settings";
import { AppText } from "@/components/ui/AppText";
import { useAppColors } from "@/hooks/use-app-colors";
import { useThemeMode } from "@/hooks/use-theme-mode";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppearanceScreen() {
  const { colors } = useAppColors();
  const {
    accentColor,
    setAccent,
    fontFamily: currentFont,
    setFont,
  } = useThemeMode();
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
          <AccentColorPicker
            colors={colors}
            selectedColor={tempAccent}
            onSelect={setTempAccent}
          />
          <FontStylePicker
            colors={colors}
            selectedFont={tempFont}
            onSelect={setTempFont}
          />
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
