import { useAppColors } from "@/hooks/use-app-colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { AppText } from "../ui/AppText";

export default function TaskFormHeader() {
  const { colors } = useAppColors();
  const router = useRouter();

  return (
    <View className="flex-row items-center justify-between px-4 py-4">
      <TouchableOpacity
        onPress={() => router.back()}
        className="p-2 rounded-full"
        style={{ backgroundColor: colors.borderColor }}
      >
        <Ionicons name="arrow-back" size={24} color={colors.text} />
      </TouchableOpacity>

      <AppText className="text-xl font-bold" style={{ color: colors.text }}>
        New Task
      </AppText>

      <TouchableOpacity
        onPress={() => {
          /* TODO: Save logic */
          router.back();
        }}
        className="px-6 py-2 rounded-full"
        style={{ backgroundColor: colors.primary }}
      >
        <AppText className="font-bold text-base" style={{ color: colors.white }}>Save</AppText>
      </TouchableOpacity>
    </View>
  );
}
