import { useAppColors } from "@/hooks/use-app-colors";
import React from "react";
import { AppText } from "../ui/AppText";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  const { colors } = useAppColors();

  return (
    <AppText
      className="px-4 mt-6 mb-2 text-xs font-bold uppercase tracking-widest"
      style={{ color: colors.text }}
    >
      {title}
    </AppText>
  );
};

export default SectionHeader;
