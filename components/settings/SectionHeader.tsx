import { useAppColors } from "@/hooks/use-app-colors";
import React from "react";
import { Text } from "react-native";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  const { colors } = useAppColors();

  return (
    <Text
      className="px-4 mt-6 mb-2 text-xs font-bold uppercase tracking-widest"
      style={{ color: colors.text }}
    >
      {title}
    </Text>
  );
};

export default SectionHeader;
