import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { ChevronRight } from "lucide-react-native";
import React, { useMemo, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

/* ---------------- TAB TYPES ---------------- */

type TabType =
  | "upcoming"
  | "today"
  | "pinned"
  | "favorites"
  | "overdue"
  | "completed";

/* ---------------- TASK MODEL ---------------- */

type TaskType = {
  id: number;
  title: string;
  time: string;
  date: string;
  completed?: boolean;
  pinned?: boolean;
  favorite?: boolean;
  indicatorColor: string;
};

/* ---------------- TAB CONFIG ---------------- */

const TABS: { key: TabType; label: string }[] = [
  { key: "upcoming", label: "Upcoming" },
  { key: "today", label: "Today" },
  { key: "pinned", label: "Pinned" },
  { key: "favorites", label: "Favorites" },
  { key: "overdue", label: "Overdue" },
  { key: "completed", label: "Completed" },
];

export default function TaskDashboardSection() {
  const scheme = useColorScheme() ?? "light";
  const colors = Colors[scheme];

  const [activeTab, setActiveTab] = useState<TabType>("upcoming");

  /* ---------------- STATIC DATA ---------------- */

  const tasks: TaskType[] = [
    {
      id: 1,
      title: "Grocery Shopping",
      time: "5:00 PM",
      date: "2026-03-01",
      indicatorColor: "#F59E0B",
    },
    {
      id: 2,
      title: "Dentist Appointment",
      time: "11:30 AM",
      date: "2026-02-27",
      pinned: true,
      indicatorColor: "#60A5FA",
    },
    {
      id: 3,
      title: "Submit Assignment",
      time: "8:00 PM",
      date: "2026-02-27",
      favorite: true,
      indicatorColor: "#10B981",
    },
    {
      id: 4,
      title: "Pay Electricity Bill",
      time: "6:00 PM",
      date: "2026-02-20",
      indicatorColor: "#EF4444",
    },
    {
      id: 5,
      title: "Daily Workout",
      time: "7:00 AM",
      date: "2026-02-26",
      completed: true,
      indicatorColor: "#8B5CF6",
    },
  ];

  const today = new Date().toISOString().split("T")[0];

  /* ---------------- FILTER ENGINE ---------------- */

  const filteredTasks = useMemo(() => {
    switch (activeTab) {
      case "today":
        return tasks.filter((t) => t.date === today);

      case "pinned":
        return tasks.filter((t) => t.pinned);

      case "favorites":
        return tasks.filter((t) => t.favorite);

      case "completed":
        return tasks.filter((t) => t.completed);

      case "overdue":
        return tasks.filter((t) => !t.completed && t.date < today);

      case "upcoming":
      default:
        return tasks.filter((t) => !t.completed && t.date > today);
    }
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
              <Text
                className="text-base font-semibold"
                style={{
                  color: isActive ? "#fff" : colors.secondaryText,
                }}
              >
                {tab.label}
              </Text>
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

            <ChevronRight size={22} color={colors.secondaryText} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
