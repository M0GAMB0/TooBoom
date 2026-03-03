import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import React from "react";
import { Text, View } from "react-native";

interface CategoryHeaderProps {
  title: string;
  count: number;
  color: string;
}

export const CategoryHeader = ({ title, count, color }: CategoryHeaderProps) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  return (
    <View className="flex-row items-center justify-between mt-6 mb-4 px-2">
      <View className="flex-row items-center">
        <View 
          className="w-3 h-3 rounded-full mr-3"
          style={{ backgroundColor: color }}
        />
        <Text 
          className="text-2xl font-bold"
          style={{ color: theme.text }}
        >
          {title}
        </Text>
      </View>
      <View 
        className="px-3 py-1 rounded-full"
        style={{ backgroundColor: theme.borderColor }}
      >
        <Text 
          className="text-sm font-bold"
          style={{ color: theme.secondaryText }}
        >
          {count}
        </Text>
      </View>
    </View>
  );
};
