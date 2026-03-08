import { useAppColors } from "@/hooks/use-app-colors";
import React from "react";
import { View } from "react-native";
import { AppText } from "../ui/AppText";
import { SectionHeader } from "../ui/SectionHeader";

interface CategoryHeaderProps {
  title: string;
  count: number;
  color: string;
}

export const CategoryHeader = ({ title, count, color }: CategoryHeaderProps) => {
  const { colors } = useAppColors();

  return (
    <View className="flex-row items-center justify-between mt-8 mb-4 px-1">
      <View className="flex-row items-center">
        <View 
          className="w-3.5 h-3.5 rounded-full mr-4"
          style={{ backgroundColor: color }}
        />
        <SectionHeader title={title} />
      </View>
      <View 
        className="px-4 py-1.5 rounded-xl"
        style={{ backgroundColor: "#1F182F" }}
      >
        <AppText 
          className="text-base font-bold"
          style={{ color: colors.secondaryText }}
        >
          {count}
        </AppText>
      </View>
    </View>
  );
};
