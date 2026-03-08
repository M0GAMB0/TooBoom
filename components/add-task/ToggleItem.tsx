import { NeumorphicCard } from "@/components/NeumorphicCard";
import { useAppColors } from "@/hooks/use-app-colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Switch, View } from "react-native";
import { AppText } from "../ui/AppText";

interface Props {
  label: string;
  description?: string;
  icon: string;
  iconBg?: string;
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
          <View
            className="p-3 rounded-2xl"
            style={{ backgroundColor: iconBg || (isDark ? colors.borderColor : colors.background) }}
          >
            <Ionicons name={icon as any} size={22} color={colors.primary} />
          </View>
          <View className="ml-4">
            <AppText className="text-base font-bold" style={{ color: colors.text }}>
              {label}
            </AppText>
            {description && (
              <AppText className="text-xs" style={{ color: colors.secondaryText }}>
                {description}
              </AppText>
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
