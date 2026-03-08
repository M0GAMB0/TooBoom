import { useAppColors } from "@/hooks/use-app-colors";
import React from "react";
import { View } from "react-native";
import SectionHeader from "./SectionHeader";

interface SettingsCategoryProps {
  title: string;
  children: React.ReactNode;
}

const SettingsCategory: React.FC<SettingsCategoryProps> = ({ title, children }) => {
  const { colors } = useAppColors();

  return (
    <View
      className="rounded-3xl shadow-2xl overflow-hidden mb-6"
      style={{
        backgroundColor: colors.cardBackground,
        borderWidth: 1,
        borderColor: colors.borderColor,
      }}
    >
      <SectionHeader title={title} />
      {children}
    </View>
  );
};

export default SettingsCategory;
