import { CategoryHeader } from "@/components/tasks/CategoryHeader";
import { FilterChip } from "@/components/tasks/FilterChip";
import { TaskCard } from "@/components/tasks/TaskCard";
import { TaskSearchBar } from "@/components/tasks/TaskSearchBar";
import { AppText } from "@/components/ui/AppText";
import { FAB } from "@/components/ui/FAB";
import { TabHeader } from "@/components/ui/TabHeader";
import { useAppColors } from "@/hooks/use-app-colors";
import { navigateToNewTask } from "@/src/utils/navigation";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Task {
  id: string;
  title: string;
  time?: string;
  location?: string;
  priority?: "high" | "med" | "low";
  energy?: "high" | "low";
  difficulty?: "hard" | "med";
  isStarred?: boolean;
  status: "todo" | "in-progress" | "completed"; // Updated
  dueDate: Date; // Added
  reminderIcon?: boolean;
}

interface Category {
  id: string;
  title: string;
  color: string;
  tasks: Task[];
}

export default function TasksScreen() {
  const { colors } = useAppColors();
  const [searchQuery, setSearchQuery] = useState("");
  
  // States for dual filtering
  const [activeFilter, setActiveFilter] = useState("To-Do"); // Main Status Filter
  const [activeTimeFilter, setActiveTimeFilter] = useState("All"); // Secondary Time Filter

  const statusFilters = ["To-Do", "In Progress", "Completed"];
  const timeFilters = ["All", "Today", "Upcoming", "Overdue"];

  // Enhanced mock data with statuses and dates
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const taskCategories: Category[] = [
    {
      id: "work",
      title: "Work",
      color: colors.categoryWork,
      tasks: [
        {
          id: "1",
          title: "Q3 Financial Report Review",
          time: "10:00 AM",
          priority: "high",
          energy: "high",
          difficulty: "hard",
          isStarred: true,
          status: "in-progress",
          dueDate: today,
        },
        {
          id: "2",
          title: "Team Sync Meeting",
          time: "2:00 PM",
          priority: "med",
          energy: "low",
          reminderIcon: true,
          status: "todo",
          dueDate: tomorrow,
        },
        {
          id: "5",
          title: "Client Email Followup",
          priority: "low",
          status: "todo",
          dueDate: yesterday, // Overdue
        },
      ],
    },
    {
      id: "personal",
      title: "Personal",
      color: colors.categoryPersonal,
      tasks: [
        {
          id: "3",
          title: "Grocery Run",
          location: "Whole Foods",
          priority: "med",
          difficulty: "med",
          isStarred: true,
          status: "todo",
          dueDate: today,
        },
      ],
    },
    {
      id: "health",
      title: "Health",
      color: colors.categoryHealth,
      tasks: [
        {
          id: "4",
          title: "Gym Session - Leg Day",
          time: "6:00 PM",
          priority: "low",
          energy: "high",
          status: "completed",
          dueDate: yesterday,
        },
      ],
    },
  ];

  // Logic to filter tasks based on BOTH active filters
  const filteredCategories = taskCategories.map(category => ({
    ...category,
    tasks: category.tasks.filter(task => {
      // 1. Status Filter
      const statusMap: Record<string, string> = {
        "To-Do": "todo",
        "In Progress": "in-progress",
        "Completed": "completed"
      };
      if (task.status !== statusMap[activeFilter]) return false;

      // 2. Time Filter
      const isToday = task.dueDate.toDateString() === today.toDateString();
      const isUpcoming = task.dueDate > today && !isToday;
      const isOverdue = task.dueDate < today && !isToday && task.status !== "completed";

      if (activeTimeFilter === "Today") return isToday;
      if (activeTimeFilter === "Upcoming") return isUpcoming;
      if (activeTimeFilter === "Overdue") return isOverdue;
      
      return true; // "All"
    })
  })).filter(category => category.tasks.length > 0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <TabHeader title="My Tasks" />

      <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <TaskSearchBar 
          value={searchQuery} 
          onChangeText={setSearchQuery} 
        />

        {/* Status Filters (Kanban Tabs) */}
        <View className="flex-row justify-between mb-4 mt-2">
          {statusFilters.map((filter) => (
            <TouchableOpacity
              key={filter}
              onPress={() => setActiveFilter(filter)}
              className="px-4 py-2 rounded-xl"
              style={{ 
                backgroundColor: activeFilter === filter ? colors.primary : 'transparent',
                borderWidth: 1,
                borderColor: activeFilter === filter ? colors.primary : colors.borderColor
              }}
            >
              <AppText 
                className="font-semibold" 
                style={{ color: activeFilter === filter ? colors.white : colors.secondaryText }}
              >
                {filter}
              </AppText>
            </TouchableOpacity>
          ))}
        </View>

        {/* Time Filters (Secondary) */}
        <View className="mb-8">
          <AppText className="text-xs font-bold mb-3 uppercase tracking-widest" style={{ color: colors.secondaryText }}>
            Time Filter
          </AppText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {timeFilters.map((filter) => (
              <FilterChip
                key={filter}
                label={filter}
                isActive={activeTimeFilter === filter}
                onPress={() => setActiveTimeFilter(filter)}
              />
            ))}
          </ScrollView>
        </View>

        {/* Task Lists */}
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <View key={category.id} className="mb-6">
              <CategoryHeader 
                title={category.title} 
                count={category.tasks.length} 
                color={category.color} 
              />
              {category.tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  title={task.title}
                  time={task.time}
                  location={task.location}
                  priority={task.priority}
                  energy={task.energy}
                  difficulty={task.difficulty}
                  isStarred={task.isStarred}
                  reminderIcon={task.reminderIcon}
                />
              ))}
            </View>
          ))
        ) : (
          <View className="items-center justify-center py-20">
            <AppText style={{ color: colors.secondaryText }}>
              No {activeFilter.toLowerCase()} tasks for {activeTimeFilter.toLowerCase()}
            </AppText>
          </View>
        )}
        
        {/* Extra padding for FAB */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Floating Action Button */}
      {/* <TouchableOpacity
        className="absolute bottom-10 right-8 w-20 h-20 rounded-full items-center justify-center shadow-2xl"
        style={{ 
          backgroundColor: colors.primary,
          shadowColor: colors.primary,
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.5,
          shadowRadius: 15,
          elevation: 10
        }}
        onPress={() => router.push("/new-task")}
      >
        <Ionicons name="add" size={48} color="white" />
      </TouchableOpacity> */}
      <FAB onPress={navigateToNewTask} />
    </SafeAreaView>
  );
}
