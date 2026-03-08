import { CategoryHeader } from "@/components/tasks/CategoryHeader";
import { FilterChip } from "@/components/tasks/FilterChip";
import { TaskCard } from "@/components/tasks/TaskCard";
import { TaskSearchBar } from "@/components/tasks/TaskSearchBar";
import { AppText } from "@/components/ui/AppText";
import { useAppColors } from "@/hooks/use-app-colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
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
  isCompleted?: boolean;
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
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("Today");

  const filters = ["Today", "Upcoming", "Pending", "Completed"];

  // Mock data for the UI demonstration
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
        },
        {
          id: "2",
          title: "Team Sync Meeting",
          time: "2:00 PM",
          priority: "med",
          energy: "low",
          reminderIcon: true,
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
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4">
        <View>
          <AppText className="text-xl" style={{ color: colors.secondaryText }}>
            Good Morning,
          </AppText>
          <AppText className="text-4xl font-extrabold" style={{ color: colors.text }}>
            My Tasks
          </AppText>
        </View>
        <TouchableOpacity 
          className="w-14 h-14 rounded-full items-center justify-center"
          style={{ backgroundColor: "#1F182F" }}
          onPress={() => router.push("/settings")}
        >
          <Ionicons name="settings-sharp" size={28} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <TaskSearchBar 
          value={searchQuery} 
          onChangeText={setSearchQuery} 
        />

        {/* Filters */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          className="mb-8"
        >
          {filters.map((filter) => (
            <FilterChip
              key={filter}
              label={filter}
              isActive={activeFilter === filter}
              onPress={() => setActiveFilter(filter)}
            />
          ))}
        </ScrollView>

        {/* Task Lists */}
        {taskCategories.map((category) => (
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
                isStarred={task.id === "1" || task.id === "3"} // Matching mockup stars
                reminderIcon={task.reminderIcon}
              />
            ))}
          </View>
        ))}
        
        {/* Extra padding for FAB */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity
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
      </TouchableOpacity>
    </SafeAreaView>
  );
}
