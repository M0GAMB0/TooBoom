import { useAppColors } from "@/hooks/use-app-colors";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { AppText } from "../ui/AppText";

type StreakCardProps = {
  streakDays: number;
};

const StreakCard: React.FC<StreakCardProps> = ({ streakDays }) => {
  const { colors } = useAppColors();

  return (
    <View
      className="w-[48%] border rounded-2xl p-4 shadow-2xl"
      style={{
        backgroundColor: colors.cardBackground,
        borderColor: colors.borderColor,
      }}
    >
      <View 
        className="w-12 h-12 rounded-xl items-center justify-center mb-4"
        style={{ backgroundColor: colors.streak + '33' }}
      >
        <MaterialIcons
          name="local-fire-department"
          size={24}
          color={colors.streak}
        />
      </View>

      <View className="flex-row items-end items-baseline mt-[15px]">
        <AppText className="text-2xl font-bold" style={{ color: colors.text }}>
          {streakDays}
        </AppText>
        <AppText className="text-sm  ml-2" style={{ color: colors.secondaryText }}>
          Days
        </AppText>
      </View>

      <AppText className=" text-sm mt-1" style={{ color: colors.secondaryText }}>
        Daily Streak
      </AppText>
    </View>
  );
};

export default StreakCard;
