import { CategoryHeader } from "@/components/tasks/CategoryHeader";
import { FilterChip } from "@/components/tasks/FilterChip";
import { TaskCard } from "@/components/tasks/TaskCard";
import { TaskSearchBar } from "@/components/tasks/TaskSearchBar";
import { AppText } from "@/components/ui/AppText";
import { useAppColors } from "@/hooks/use-app-colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useMemo, useState } from "react";
import { ScrollView, StatusBar, TouchableOpacity, View } from "react-native";
import { SafeAreaView as SafeAreaViewContext } from "react-native-safe-area-context";

// Define Task type to ensure consistency with TaskCardProps
type TaskPriority = "high" | "med" | "low";
type TaskEnergy = "high" | "low";
type TaskDifficulty = "hard" | "med";

interface TaskItem {
  id: string;
  title: string;
  time?: string;
  location?: string;
  priority?: TaskPriority;
  energy?: TaskEnergy;
  difficulty?: TaskDifficulty;
  isStarred?: boolean;
  isCompleted?: boolean;
  reminderIcon?: boolean;
}

const MOCK_TASKS: Record<string, TaskItem[]> = {
  Work: [
    {
      id: "1",
      title: "Q3 Financial Report Review",
      time: "10:00 AM",
      priority: "high",
      energy: "high",
      difficulty: "hard",
      isStarred: true,
      isCompleted: false,
    },
    {
      id: "2",
      title: "Team Sync Meeting",
      time: "2:00 PM",
      priority: "med",
      energy: "low",
      reminderIcon: true,
      isCompleted: false,
    },
  ],
  Personal: [
    {
      id: "3",
      title: "Grocery Run",
      location: "Whole Foods",
      priority: "med",
      difficulty: "med",
      isStarred: true,
      isCompleted: false,
    },
  ],
  Health: [
    {
      id: "4",
      title: "Gym Session - Leg Day",
      time: "6:00 PM",
      priority: "low",
      energy: "high",
      isCompleted: false,
    },
    {
        id: "5",
        title: "Morning Yoga",
        time: "7:00 AM",
        priority: "low",
        energy: "low",
        isCompleted: true,
      },
  ],
};

export default function MyTasksScreen() {
  const { colors, isDark } = useAppColors();
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("Today");

  const filters = ["Today", "Upcoming", "Pending", "Completed"];
  
  const filteredTasks = useMemo(() => {
    const result: Record<string, TaskItem[]> = {};
    Object.keys(MOCK_TASKS).forEach((category) => {
      result[category] = MOCK_TASKS[category].filter((task) => {
        if (activeFilter === "Completed") return task.isCompleted;
        if (activeFilter === "Pending") return !task.isCompleted;
        // For "Today" and "Upcoming", show non-completed tasks
        return !task.isCompleted;
      });
    });
    return result;
  }, [activeFilter]);

  return (
    <SafeAreaViewContext style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
      
      <View className="flex-1 px-5 pt-4">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-6">
          <View>
            <AppText className="text-lg opacity-60 font-medium" style={{ color: colors.text }}>Good Morning,</AppText>
            <AppText className="text-4xl font-bold" style={{ color: colors.text }}>My Tasks</AppText>
          </View>
          <TouchableOpacity 
            className="p-3 rounded-full"
            style={{ backgroundColor: colors.cardBackground, borderWidth: 1, borderColor: colors.borderColor }}
          >
            <Ionicons name="notifications-outline" size={24} color={colors.text} />
            <View className="absolute top-3 right-3 w-2 h-2 rounded-full" style={{ backgroundColor: colors.errorRed, borderWidth: 2, borderColor: colors.white }} />
          </TouchableOpacity>
        </View>

        {/* Search */}
        <TaskSearchBar value={search} onChangeText={setSearch} />

        {/* Filters */}
        <View className="mb-6">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
            {filters.map((filter) => (
              <FilterChip
                key={filter}
                label={filter}
                isActive={activeFilter === filter}
                onPress={() => setActiveFilter(filter)}
              />
            ))}
          </ScrollView>
        </View>

        {/* Task List */}
        <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
          {Object.entries(filteredTasks).map(([category, tasks]) => (
            <React.Fragment key={category}>
              {tasks.length > 0 && (
                <>
                  <CategoryHeader 
                    title={category} 
                    count={tasks.length} 
                    color={
                      category === "Work" ? colors.categoryWork : 
                      category === "Personal" ? colors.categoryPersonal : 
                      colors.categoryHealth
                    } 
                  />
                  {tasks.map(task => (
                    <TaskCard key={task.id} {...task} />
                  ))}
                </>
              )}
            </React.Fragment>
          ))}
          
          <View className="h-20" />
        </ScrollView>
      </View>

      {/* Floating Action Button */}
      {/* <TouchableOpacity 
        className="absolute bottom-10 right-8 w-16 h-16 rounded-full items-center justify-center shadow-lg"
        style={{ 
          backgroundColor: colors.primary,
          shadowColor: colors.primary,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.4,
          shadowRadius: 10,
          elevation: 8,
        }}
      >
        <Ionicons name="add" size={36} color={colors.white} />
      </TouchableOpacity> */}
    </SafeAreaViewContext>
  );
}
