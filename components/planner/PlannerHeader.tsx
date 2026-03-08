import { AppText } from "@/components/ui/AppText";
import { useAppColors } from "@/hooks/use-app-colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";

interface PlannerHeaderProps {
  title: string;
}

export function PlannerHeader({ title }: PlannerHeaderProps) {
  const { colors, fontFamily } = useAppColors();
  const router = useRouter();

  return (
    <View className="flex-row items-center justify-between px-6 py-4">
      <View className="flex-row items-center">
        <View 
          className="w-10 h-10 rounded-xl items-center justify-center mr-3"
        >
          <Ionicons name="calendar-clear" size={28} color={colors.primary} />
        </View>
        <AppText 
          className="text-2xl font-bold" 
          style={{ color: colors.text, fontFamily }}
        >
          {title}
        </AppText>
      </View>
      <View className="flex-row items-center gap-2">
        <TouchableOpacity className="p-2">
          <Ionicons name="search-outline" size={26} color={colors.text} />
        </TouchableOpacity>
        <TouchableOpacity 
          className="p-2 bg-purple-50 rounded-full"
          style={{ backgroundColor: colors.streakBadge }}
          onPress={() => router.push("/settings")}
        >
          <Ionicons name="settings-sharp" size={24} color={colors.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
