import { useAppColors } from "@/hooks/use-app-colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { AppText } from "../ui/AppText";

interface SettingsHeaderProps {
  title: string;
  onBackPress: () => void;
}

const SettingsHeader: React.FC<SettingsHeaderProps> = ({ title, onBackPress }) => {
  const { colors } = useAppColors();

  return (
    <View className="flex-row items-center px-4 py-3 mb-2">
      <TouchableOpacity
        onPress={onBackPress}
        className="w-10 h-10 items-center justify-center rounded-full mr-2"
        style={{ backgroundColor: colors.cardBackground }}
      >
        <Ionicons name="arrow-back" size={24} color={colors.primary} />
      </TouchableOpacity>
      <AppText
        className="text-2xl font-bold ml-1"
        style={{ color: colors.text }}
      >
        {title}
      </AppText>
    </View>
  );
};

export default SettingsHeader;
