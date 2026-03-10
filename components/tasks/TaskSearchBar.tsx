import { useAppColors } from "@/hooks/use-app-colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";

interface TaskSearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const TaskSearchBar = ({ value, onChangeText, placeholder = "Search tasks, tags..." }: TaskSearchBarProps) => {
  const { colors, fontFamily } = useAppColors();

  return (
    <View 
      className="flex-row items-center px-5 py-4 rounded-[24px] mb-8"
      style={{ backgroundColor: colors.cardBackground }}
    >
      <Ionicons name="search" size={24} color={colors.secondaryText} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.secondaryText}
        style={{ color: colors.text, flex: 1, marginLeft: 12, fontSize: 18, fontFamily }}
      />
    </View>
  );
};
