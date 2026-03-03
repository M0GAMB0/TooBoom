import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface FilterChipProps {
  label: string;
  isActive: boolean;
  onPress: () => void;
}

export const FilterChip = ({ label, isActive, onPress }: FilterChipProps) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`px-6 py-3 rounded-full mr-3 ${isActive ? '' : 'border-[1px]'}`}
      style={[
        isActive 
          ? { backgroundColor: theme.primary, shadowColor: theme.primary, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 5 }
          : { backgroundColor: theme.cardBackground, borderColor: theme.borderColor }
      ]}
    >
      <Text
        className="font-semibold text-base"
        style={{ color: isActive ? "white" : theme.secondaryText }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};
