import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import React from "react";
import { Text, View } from "react-native";
import SwipeableTaskItem from "./SwipeableTaskItem";

export default function TaskListGrouped({ tasks }: any) {
  const scheme = useColorScheme() ?? "light";
  const colors = Colors[scheme];

  const grouped = tasks.reduce((acc: any, task: any) => {
    if (!acc[task.date]) acc[task.date] = [];
    acc[task.date].push(task);
    return acc;
  }, {});

  return (
    <View>
      {Object.keys(grouped).map((date) => (
        <View key={date}>
          <Text
            className="mb-2 mt-3 font-semibold"
            style={{
              color: colors.secondaryText,
            }}
          >
            {date}
          </Text>

          {grouped[date].map((task: any) => (
            <SwipeableTaskItem key={task.id} task={task} />
          ))}
        </View>
      ))}
    </View>
  );
}
