import { AppText } from "@/components/ui/AppText";
import { useAppColors } from "@/hooks/use-app-colors";
import React from "react";
import { View } from "react-native";

interface PlannerEventProps {
  title: string;
  subtitle?: string;
  timeRange?: string;
  color: string;
  attendees?: number;
  focusMode?: boolean;
}

export function PlannerEvent({
  title,
  subtitle,
  timeRange,
  color,
  attendees,
  focusMode,
}: PlannerEventProps) {
  const { colors, fontFamily } = useAppColors();

  return (
    <View
      className="flex-1 ml-4 rounded-[28px] p-5 mb-8 overflow-hidden border-l-[5px]"
      style={{
        backgroundColor: color + "12",
        borderColor: color,
      }}
    >
      <View className="flex-row items-start justify-between">
        <View className="flex-1">
          <AppText
            className="text-xl font-bold mb-1"
            style={{ color, fontFamily }}
          >
            {title}
          </AppText>
          {subtitle && (
            <AppText
              className="text-base font-bold opacity-70 mb-2"
              style={{ color, fontFamily }}
            >
              📍 {subtitle}
            </AppText>
          )}
          {timeRange && (
            <AppText
              className="text-xs font-bold opacity-60"
              style={{ color, fontFamily }}
            >
              {timeRange}
            </AppText>
          )}
          {focusMode && (
            <AppText
              className="text-xs font-medium opacity-50 mt-1"
              style={{ color: colors.text, fontFamily }}
            >
              Focus mode active
            </AppText>
          )}
        </View>
      </View>

      {attendees && (
        <View className="flex-row mt-4">
          <View className="flex-row items-center">
            <View className="w-7 h-7 rounded-full bg-slate-200 border-2 border-white -mr-2 items-center justify-center">
              <AppText className="text-[10px]">👤</AppText>
            </View>
            <View className="w-7 h-7 rounded-full bg-slate-300 border-2 border-white items-center justify-center">
              <AppText className="text-[10px]">👤</AppText>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
