import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Pin, Star } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

export default function SwipeableTaskItem({ task }: any) {
  const scheme = useColorScheme() ?? "light";
  const colors = Colors[scheme];

  const renderRight = () => (
    <View className="flex-row">
      <View className="bg-yellow-400 justify-center px-5">
        <Star color="#fff" />
      </View>

      <View className="bg-blue-500 justify-center px-5">
        <Pin color="#fff" />
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
            <Text
              className="text-lg font-semibold"
              style={{ color: colors.text }}
            >
              {task.title}
            </Text>

            <Text
              className="text-base mt-1"
              style={{
                color: colors.secondaryText,
              }}
            >
              {task.date}, {task.time}
            </Text>
          </View>
        </View>
      </View>
    </Swipeable>
  );
}
