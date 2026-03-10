import { PlannerDatePicker } from "@/components/planner/PlannerDatePicker";
import { PlannerEvent } from "@/components/planner/PlannerEvent";
import { PlannerHeader } from "@/components/planner/PlannerHeader";
import { PlannerTabs } from "@/components/planner/PlannerTabs";
import { AppText } from "@/components/ui/AppText";
import { FAB } from "@/components/ui/FAB";
import { useAppColors } from "@/hooks/use-app-colors";
import { navigateToNewTask } from "@/src/utils/navigation";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PlannerScreen() {
  const { colors, fontFamily } = useAppColors();
  const [activeTab, setActiveTab] = useState("Day");
  const [selectedDate, setSelectedDate] = useState(11);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.background }}
      edges={["top"]}
    >
      <PlannerHeader title="June 2024" />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <PlannerTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <PlannerDatePicker
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />

        <View
          className="flex-1 px-6 pt-6 border-t border-slate-100"
          style={{ borderColor: colors.borderColor }}
        >
          {/* Time scale and Events */}
          <View className="flex-row">
            {/* Left Column: Time scale */}
            <View className="w-14 items-center pr-2">
              <AppText
                className="text-[13px] font-bold opacity-30 h-28"
                style={{ color: colors.text, fontFamily }}
              >
                8 AM
              </AppText>
              <AppText
                className="text-[13px] font-bold opacity-30 h-28"
                style={{ color: colors.text, fontFamily }}
              >
                9 AM
              </AppText>
              <View className="h-20" />
              <AppText
                className="text-[13px] font-bold opacity-30 h-32"
                style={{ color: colors.text, fontFamily }}
              >
                10 AM
              </AppText>
              <AppText
                className="text-[13px] font-bold opacity-30 h-32"
                style={{ color: colors.text, fontFamily }}
              >
                11 AM
              </AppText>
              <AppText
                className="text-[13px] font-bold opacity-30 h-32"
                style={{ color: colors.text, fontFamily }}
              >
                12 PM
              </AppText>
              <AppText
                className="text-[13px] font-bold opacity-30 h-32"
                style={{ color: colors.text, fontFamily }}
              >
                1 PM
              </AppText>
              <AppText
                className="text-[13px] font-bold opacity-30 h-32"
                style={{ color: colors.text, fontFamily }}
              >
                2 PM
              </AppText>
            </View>

            {/* Right Column: Events */}
            <View className="flex-1">
              <PlannerEvent
                title="Daily Standup"
                subtitle="Engineering Room"
                color="#6366F1"
                attendees={2}
              />

              {/* Current Time Indicator Row */}
              <View className="flex-row items-center w-full mb-10 -ml-16">
                <View className="w-2.5 h-2.5 rounded-full bg-red-400 z-10" />
                <View className="flex-1 h-[1.5px] bg-red-400 opacity-30" />
              </View>

              <PlannerEvent
                title="Design Review"
                timeRange="10:00 - 11:30"
                color="#F59E0B"
              />

              <PlannerEvent
                title="Lunch Break"
                timeRange="12:00 - 13:00"
                color="#10B981"
                focusMode={false}
              />

              <PlannerEvent
                title="Deep Work: UI Design"
                subtitle="Focus mode active"
                color="#3B82F6"
              />

              <View className="h-20" />
            </View>
          </View>
        </View>
      </ScrollView>

      <FAB onPress={navigateToNewTask} />
    </SafeAreaView>
  );
}
