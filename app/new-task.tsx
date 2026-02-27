import { NeumorphicCard } from "@/components/NeumorphicCard";
import SelectionGroup from "@/components/add-task/SelectionGroup";
import SubtaskList from "@/components/add-task/SubtaskList";
import TaskFormHeader from "@/components/add-task/TaskFormHeader";
import TaskInputSection from "@/components/add-task/TaskInputSection";
import ToggleItem from "@/components/add-task/ToggleItem";
import { useAppColors } from "@/hooks/use-app-colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewTaskScreen() {
  const { colors, isDark } = useAppColors();

  // Form State
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("High");
  const [category, setCategory] = useState("Work");
  const [subtasks, setSubtasks] = useState([
    { id: "1", text: "Draft initial outline", completed: false },
    { id: "2", text: "", completed: false },
  ]);
  const [remindMe, setRemindMe] = useState(true);
  const [makeHabit, setMakeHabit] = useState(false);

  // Subtask handlers
  const addSubtask = () => {
    setSubtasks([
      ...subtasks,
      { id: Date.now().toString(), text: "", completed: false },
    ]);
  };

  const updateSubtask = (id: string, text: string) => {
    setSubtasks(subtasks.map((s) => (s.id === id ? { ...s, text } : s)));
  };

  const toggleSubtask = (id: string) => {
    setSubtasks(subtasks.map((s) => (s.id === id ? { ...s, completed: !s.completed } : s)));
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: colors.background }}>
      <TaskFormHeader />

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40, paddingTop: 20 }}
      >
        <TaskInputSection
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
        />

        {/* Quick Actions Row */}
        <View className="flex-row px-5 mt-6 justify-between">
          <NeumorphicCard colors={colors} style={{ flex: 1, marginRight: 10 }}>
            <TouchableOpacity
              className="flex-row items-center px-4 py-3 rounded-2xl"
              style={{ backgroundColor: colors.cardBackground }}
            >
              <Ionicons
                name="calendar-outline"
                size={20}
                color={colors.primary}
              />
              <Text className="ml-2 font-bold" style={{ color: colors.text }}>
                Today
              </Text>
            </TouchableOpacity>
          </NeumorphicCard>

          <NeumorphicCard colors={colors} style={{ flex: 1, marginRight: 10 }}>
            <TouchableOpacity
              className="flex-row items-center px-4 py-3 rounded-2xl"
              style={{ backgroundColor: colors.cardBackground }}
            >
              <Ionicons name="time-outline" size={20} color={colors.primary} />
              <Text className="ml-2 font-bold" style={{ color: colors.text }}>
                10:00 AM
              </Text>
            </TouchableOpacity>
          </NeumorphicCard>

          <NeumorphicCard colors={colors} style={{ flex: 1 }}>
            <TouchableOpacity
              className="flex-row items-center px-4 py-3 rounded-2xl"
              style={{ backgroundColor: colors.cardBackground }}
            >
              <Ionicons name="flag-outline" size={20} color={colors.primary} />
              <Text className="ml-2 font-bold" style={{ color: colors.text }}>
                Priority
              </Text>
            </TouchableOpacity>
          </NeumorphicCard>
        </View>

        <SelectionGroup
          label="Priority"
          selectedValue={priority}
          onSelect={setPriority}
          options={[
            { label: "High", value: "High", icon: "!" },
            { label: "Medium", value: "Medium" },
            { label: "Low", value: "Low" },
          ]}
        />

        <SelectionGroup
          label="Category"
          selectedValue={category}
          onSelect={setCategory}
          options={[
            { label: "Work", value: "Work" },
            { label: "Personal", value: "Personal" },
            { label: "Shopping", value: "Shopping" },
            { label: "+", value: "add" },
          ]}
        />

        {/* Difficulty & Energy Level (Simplified for now as placeholders) */}
        <View className="flex-row px-5 mt-8 justify-between">
          <View className="flex-1 mr-4">
            <Text className="text-base font-semibold mb-3" style={{ color: colors.secondaryText }}>Difficulty</Text>
            <View className="h-10 rounded-2xl justify-center px-4" style={{ backgroundColor: colors.cardBackground }}>
               <View className="h-2 rounded-full w-full" style={{ backgroundColor: colors.borderColor }}>
                  <View className="h-full rounded-full w-3/4" style={{ backgroundColor: colors.primary }} />
               </View>
            </View>
          </View>
          <View className="flex-1">
            <Text className="text-base font-semibold mb-3" style={{ color: colors.secondaryText }}>Energy Level</Text>
            <View className="flex-row justify-between items-center h-10 px-4 rounded-2xl" style={{ backgroundColor: colors.cardBackground }}>
                <Ionicons name="battery-dead-outline" size={20} color={colors.secondaryText} />
                <Ionicons name="battery-half" size={20} color={colors.primary} />
                <Ionicons name="battery-full-outline" size={20} color={colors.secondaryText} />
            </View>
          </View>
        </View>

        <SubtaskList
          subtasks={subtasks}
          onAddSubtask={addSubtask}
          onUpdateSubtask={updateSubtask}
          onToggleSubtask={toggleSubtask}
        />

        <ToggleItem
          label="Remind me"
          description="Alert at due time"
          icon="notifications"
          iconBg="#3B2E5A"
          value={remindMe}
          onValueChange={setRemindMe}
        />

        <ToggleItem
          label="Make Habit"
          description="Repeat daily"
          icon="repeat-outline"
          iconBg="#2E2551"
          value={makeHabit}
          onValueChange={setMakeHabit}
        />

        <View className="h-12" />
      </ScrollView>
    </SafeAreaView>
  );
}
