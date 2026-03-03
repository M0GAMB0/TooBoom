import { useAppColors } from "@/hooks/use-app-colors";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface FilterChipProps {
  label: string;
  isActive: boolean;
  onPress: () => void;
}

export const FilterChip = ({ label, isActive, onPress }: FilterChipProps) => {
  const { colors } = useAppColors();

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`px-6 py-3 rounded-full mr-3 ${isActive ? '' : 'border-[1px]'}`}
      style={[
        isActive 
          ? { backgroundColor: colors.primary, shadowColor: colors.primary, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 5 }
          : { backgroundColor: colors.cardBackground, borderColor: colors.borderColor }
      ]}
    >
      <Text
        className="font-semibold text-base"
        style={{ color: isActive ? "white" : colors.secondaryText }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};
