import { useAppColors } from "@/hooks/use-app-colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

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

      <Text className="text-xl font-bold" style={{ color: colors.text }}>
        New Task
      </Text>

      <TouchableOpacity
        onPress={() => {
          /* TODO: Save logic */
          router.back();
        }}
        className="px-6 py-2 rounded-full"
        style={{ backgroundColor: colors.primary }}
      >
        <Text className="font-bold text-base" style={{ color: colors.white }}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
