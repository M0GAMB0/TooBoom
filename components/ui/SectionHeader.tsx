import { useAppColors } from "@/hooks/use-app-colors";
import React from "react";
import { AppText } from "./AppText";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

export function SectionHeader({ title, className }: SectionHeaderProps) {
  const { colors } = useAppColors();

  return (
    <AppText
      className={className || "text-[22px] font-bold"}
      style={{ color: colors.text }}
    >
      {title}
    </AppText>
  );
}
