import React from "react";
import { View } from "react-native";
import DailyGoalsCard from "./DailyGoalsCard";
import ProductivityCard from "./ProductivityCard";
import StreakCard from "./StreakCard";

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

  return (
    <View className="w-full">
      {/* Top Row */}
      <View className="flex-row justify-between">
        <StreakCard streakDays={streakDays} />
        <ProductivityCard percentage={percentage} />
      </View>

      <DailyGoalsCard
        completedTasks={completedTasks}
        totalTasks={totalTasks}
        percentage={percentage}
      />
    </View>
  );
};

export default StatsSection;
