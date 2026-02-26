import { useAppColors } from "@/hooks/use-app-colors";
import React from "react";
import { Text, View } from "react-native";

type DailyGoalsCardProps = {
  completedTasks: number;
  totalTasks: number;
  percentage: number;
};

const DailyGoalsCard: React.FC<DailyGoalsCardProps> = ({
  completedTasks,
  totalTasks,
  percentage,
}) => {
  const { colors } = useAppColors();

  return (
    <View
      className=" border  rounded-2xl p-5 mt-2 shadow-2xl"
      style={{
        backgroundColor: colors.cardBackground,
        borderColor: colors.borderColor,
      }}
    >
      <View className="flex-row justify-between items-end">
        <View>
          <Text
            className="text-lg font-semibold"
            style={{ color: colors.text }}
          >
            Daily Goals
          </Text>
          <Text
            className="text-sm mt-1"
            style={{ color: colors.secondaryText }}
          >
            {completedTasks} of {totalTasks} tasks completed
          </Text>
        </View>

        <Text className="text-base font-bold" style={{ color: colors.text }}>
          {percentage}%
        </Text>
      </View>

      {/* Progress Bar */}
      <View
        className="w-full h-2 rounded-full overflow-hidden mt-4"
        style={{ backgroundColor: colors.borderColor }}
      >
        <View
          className="h-2 rounded-full"
          style={{ width: `${percentage}%`, backgroundColor: colors.primary }}
        />
      </View>
    </View>
  );
};

export default DailyGoalsCard;
