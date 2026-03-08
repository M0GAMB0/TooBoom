import { useAppColors } from "@/hooks/use-app-colors";
import React from "react";
import { View } from "react-native";
import { AppText } from "../ui/AppText";
import SwipeableTaskItem from "./SwipeableTaskItem";

export default function TaskListGrouped({ tasks }: any) {
  const { colors } = useAppColors();

  const grouped = tasks.reduce((acc: any, task: any) => {
    if (!acc[task.date]) acc[task.date] = [];
    acc[task.date].push(task);
    return acc;
  }, {});

  return (
    <View>
      {Object.keys(grouped).map((date) => (
        <View key={date}>
          <AppText
            className="mb-2 mt-3 font-semibold"
            style={{
              color: colors.secondaryText,
            }}
          >
            {date}
          </AppText>

          {grouped[date].map((task: any) => (
            <SwipeableTaskItem key={task.id} task={task} />
          ))}
        </View>
      ))}
    </View>
  );
}
