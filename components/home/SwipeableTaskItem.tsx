import { useAppColors } from "@/hooks/use-app-colors";
import { Pin, Star } from "lucide-react-native";
import React from "react";
import { View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { AppText } from "../ui/AppText";

export default function SwipeableTaskItem({ task }: any) {
  const { colors } = useAppColors();

  const renderRight = () => (
    <View className="flex-row">
      <View className="justify-center px-5" style={{ backgroundColor: colors.energyLow }}>
        <Star color={colors.white} />
      </View>

      <View className="justify-center px-5" style={{ backgroundColor: colors.categoryWork }}>
        <Pin color={colors.white} />
      </View>
    </View>
  );

  return (
    <Swipeable renderRightActions={renderRight}>
      <View
        className="p-5 rounded-2xl mb-3 flex-row justify-between items-center"
        style={{
          backgroundColor: colors.cardBackground,
        }}
      >
        <View className="flex-row items-center">
          <View
            className="w-2 h-12 rounded-full mr-4"
            style={{
              backgroundColor: task.indicatorColor,
            }}
          />

          <View>
            <AppText
              className="text-lg font-semibold"
              style={{ color: colors.text }}
            >
              {task.title}
            </AppText>

            <AppText
              className="text-base mt-1"
              style={{
                color: colors.secondaryText,
              }}
            >
              {task.date}, {task.time}
            </AppText>
          </View>
        </View>
      </View>
    </Swipeable>
  );
}
