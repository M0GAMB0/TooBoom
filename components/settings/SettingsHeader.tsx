import { useAppColors } from "@/hooks/use-app-colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface SettingsHeaderProps {
  title: string;
  onBackPress: () => void;
}

const SettingsHeader: React.FC<SettingsHeaderProps> = ({ title, onBackPress }) => {
  const { colors } = useAppColors();

  return (
    <View className="flex-row items-center justify-between px-4 py-4">
      <TouchableOpacity
        onPress={onBackPress}
        className="w-10 h-10 rounded-full items-center justify-center"
        style={{ backgroundColor: colors.borderColor + "40" }}
      >
        <Ionicons name="arrow-back" size={24} color={colors.text} />
      </TouchableOpacity>
      <Text className="text-xl font-bold" style={{ color: colors.text }}>
        {title}
      </Text>
      <View className="w-10" />
    </View>
  );
};

export default SettingsHeader;
