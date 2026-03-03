import { useAppColors } from "@/hooks/use-app-colors";
import React from "react";
import { View } from "react-native";
import { AppText } from "../ui/AppText";

interface CategoryHeaderProps {
  title: string;
  count: number;
  color: string;
}

export const CategoryHeader = ({ title, count, color }: CategoryHeaderProps) => {
  const { colors } = useAppColors();

  return (
    <View className="flex-row items-center justify-between mt-6 mb-4 px-2">
      <View className="flex-row items-center">
        <View 
          className="w-3 h-3 rounded-full mr-3"
          style={{ backgroundColor: color }}
        />
        <AppText 
          className="text-2xl font-bold"
          style={{ color: colors.text }}
        >
          {title}
        </AppText>
      </View>
      <View 
        className="px-3 py-1 rounded-full"
        style={{ backgroundColor: colors.borderColor }}
      >
        <AppText 
          className="text-sm font-bold"
          style={{ color: colors.secondaryText }}
        >
          {count}
        </AppText>
      </View>
    </View>
  );
};
