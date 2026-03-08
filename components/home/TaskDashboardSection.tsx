import { useAppColors } from "@/hooks/use-app-colors";
import { ChevronRight } from "lucide-react-native";
import React, { useMemo, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { AppText } from "../ui/AppText";

/* ---------------- TAB TYPES ---------------- */

export enum TaskTab {
  UPCOMING = "upcoming",
  TODAY = "today",
  PINNED = "pinned",
  FAVORITES = "favorites",
  OVERDUE = "overdue",
  COMPLETED = "completed",
}

type TabType = TaskTab;

/* ---------------- TASK MODEL ---------------- */

type TaskType = {
  id: number;
  title: string;
  time: string;
  date: string;
  tab: TaskTab;
  indicatorColor: string;
};

/* ---------------- TAB CONFIG ---------------- */

const TABS: { key: TabType; label: string }[] = [
  { key: TaskTab.UPCOMING, label: "Upcoming" },
  { key: TaskTab.TODAY, label: "Today" },
  { key: TaskTab.PINNED, label: "Pinned" },
  { key: TaskTab.FAVORITES, label: "Favorites" },
  { key: TaskTab.OVERDUE, label: "Overdue" },
  { key: TaskTab.COMPLETED, label: "Completed" },
];

export default function TaskDashboardSection() {
 const {colors} = useAppColors();

  const [activeTab, setActiveTab] = useState<TabType>(TaskTab.UPCOMING);

  /* ---------------- STATIC DATA ---------------- */

  const tasks: TaskType[] = [
    {
      id: 1,
      title: "Grocery Shopping",
      time: "5:00 PM",
      date: "2026-03-01",
      tab: TaskTab.UPCOMING,
      indicatorColor: colors.energyLow,
    },
    {
      id: 2,
      title: "Dentist Appointment",
      time: "11:30 AM",
      date: "2026-02-27",
      tab: TaskTab.PINNED,
      indicatorColor: colors.categoryWork,
    },
    {
      id: 3,
      title: "Submit Assignment",
      time: "8:00 PM",
      date: "2026-02-27",
      tab: TaskTab.FAVORITES,
      indicatorColor: colors.priorityLow,
    },
    {
      id: 4,
      title: "Pay Electricity Bill",
      time: "6:00 PM",
      date: "2026-02-20",
      tab: TaskTab.OVERDUE,
      indicatorColor: colors.priorityHigh,
    },
    {
      id: 5,
      title: "Daily Workout",
      time: "7:00 AM",
      date: "2026-02-26",
      tab: TaskTab.COMPLETED,
      indicatorColor: colors.energyHigh,
    },
    {
      id: 6,
      title: "Morning Yoga",
      time: "6:00 AM",
      date: "2026-03-03",
      tab: TaskTab.TODAY,
      indicatorColor: colors.categoryPersonal,
    },
  ];

  const today = new Date().toISOString().split("T")[0];

  /* ---------------- FILTER ENGINE ---------------- */

  const filteredTasks = useMemo(() => {
    return tasks.filter((t) => t.tab === activeTab);
  }, [activeTab]);

  /* ---------------- UI ---------------- */

  return (
    <View className="flex-1 pt-6">
      {/* -------- SEGMENTED TABS -------- */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mb-6 pb-3"
      >
        {TABS.map((tab) => {
          const isActive = activeTab === tab.key;

          return (
            <TouchableOpacity
              key={tab.key}
              onPress={() => setActiveTab(tab.key)}
              className="px-6 py-3 rounded-full mr-3 shadow-md"
              style={{
                backgroundColor: isActive
                  ? colors.primary
                  : colors.cardBackground,
                borderWidth: 1,
                borderColor: isActive ? colors.primary : colors.borderColor,
              }}
            >
              <AppText
                className="text-base font-semibold"
                style={{
                  color: isActive ? colors.white : colors.secondaryText,
                }}
              >
                {tab.label}
              </AppText>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* -------- TASK LIST -------- */}

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredTasks.map((task) => (
          <View
            key={task.id}
            className="flex-row items-center justify-between p-5 rounded-2xl mb-5 shadow-lg"
            style={{ backgroundColor: colors.cardBackground }}
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

            <ChevronRight size={22} color={colors.secondaryText} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
