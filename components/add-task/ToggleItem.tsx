import { NeumorphicCard } from "@/components/NeumorphicCard";
import { useAppColors } from "@/hooks/use-app-colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Switch, Text, View } from "react-native";

interface Props {
  label: string;
  description?: string;
  icon: string;
  iconBg: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

export default function ToggleItem({
  label,
  description,
  icon,
  iconBg,
  value,
  onValueChange,
}: Props) {
  const { colors, isDark } = useAppColors();

  return (
    <NeumorphicCard
      colors={colors}
      style={{ marginHorizontal: 20, marginTop: 16 }}
    >
      <View
        className="flex-row items-center justify-between p-4 rounded-2xl"
        style={{ backgroundColor: colors.cardBackground }}
      >
        <View className="flex-row items-center flex-1">
          <View className="p-3 rounded-2xl" style={{ backgroundColor: iconBg }}>
            <Ionicons name={icon as any} size={22} color={colors.white} />
          </View>
          <View className="ml-4">
            <Text className="text-base font-bold" style={{ color: colors.text }}>
              {label}
            </Text>
            {description && (
              <Text className="text-xs" style={{ color: colors.secondaryText }}>
                {description}
              </Text>
            )}
          </View>
        </View>
        <Switch
          value={value}
          onValueChange={onValueChange}
          trackColor={{ false: colors.borderColor, true: colors.primary }}
          thumbColor={colors.white}
        />
      </View>
    </NeumorphicCard>
  );
}
