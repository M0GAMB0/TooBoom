import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";

interface TaskSearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const TaskSearchBar = ({ value, onChangeText, placeholder = "Search tasks, tags..." }: TaskSearchBarProps) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  return (
    <View 
      className="flex-row items-center px-4 py-3 rounded-2xl mb-6"
      style={{ backgroundColor: theme.cardBackground, borderBottomWidth: 1, borderBottomColor: theme.borderColor }}
    >
      <Ionicons name="search" size={20} color={theme.secondaryText} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.secondaryText}
        style={{ color: theme.text, flex: 1, marginLeft: 10, fontSize: 16 }}
      />
    </View>
  );
};
