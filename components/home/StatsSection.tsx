import { useAppColors } from "@/hooks/use-app-colors";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

type Props = {
  streakDays: number;
  completedTasks: number;
  totalTasks: number;
};

const StatsSection: React.FC<Props> = ({
  streakDays,
  completedTasks,
  totalTasks,
}) => {
  const percentage = Math.round((completedTasks / totalTasks) * 100);
  const { colors } = useAppColors();

  return (
    <View className="w-full">
      {/* Top Row */}
      <View className="flex-row justify-between">
        {/* 🔥 Daily Streak Card */}
        <View
          className="w-[48%] border rounded-2xl p-4"
          style={{
            backgroundColor: colors.cardBackground,
            borderColor: colors.borderColor,
          }}
        >
          <View className="bg-orange-500/20 w-12 h-12 rounded-xl items-center justify-center mb-4">
            <MaterialIcons
              name="local-fire-department"
              size={24}
              color={colors.streak}
            />
          </View>

          <View className="flex-row items-end items-baseline mt-[15px]">
            <Text className="text-2xl font-bold" style={{ color: colors.text }}>
              {streakDays}
            </Text>
            <Text
              className="text-sm  ml-2"
              style={{ color: colors.secondaryText }}
            >
              Days
            </Text>
          </View>

          <Text
            className=" text-sm mt-1"
            style={{ color: colors.secondaryText }}
          >
            Daily Streak
          </Text>
        </View>

        {/* 📊 Productivity Card */}
        <View
          className="w-[48%] border rounded-2xl p-4 items-center justify-center"
          style={{
            backgroundColor: colors.cardBackground,
            borderColor: colors.borderColor,
          }}
        >
          <AnimatedCircularProgress
            size={90}
            width={8}
            fill={percentage}
            tintColor={colors.primary}
            backgroundColor={colors.borderColor}
            rotation={0}
          >
            {() => (
              <Text
                className=" text-2xl font-bold"
                style={{ color: colors.text }}
              >
                {percentage}%
              </Text>
            )}
          </AnimatedCircularProgress>

          <Text
            className="text-sm mt-3"
            style={{ color: colors.secondaryText }}
          >
            Productivity
          </Text>
        </View>
      </View>

      {/* 🎯 Daily Goals Card */}
      <View
        className=" border  rounded-2xl p-5 mt-4"
        style={{
          backgroundColor: colors.cardBackground,
          borderColor: colors.borderColor,
        }}
      >
        <View className="flex-row justify-between items-center">
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

          <Text className="text-xl font-bold" style={{ color: colors.primary }}>
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
    </View>
  );
};

export default StatsSection;
