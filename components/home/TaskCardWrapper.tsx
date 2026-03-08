import React from "react";
import { ScrollView, View } from "react-native";
import TaskCard from "./TaskCard";

type TaskType = {
  id: number;
  title: string;
  description: string;
  completed?: boolean;
  badge?: string;
  priority?: "HIGH" | "LOW" | "MEDIUM";
  time?: string;
  users?: string[];
};

export default function TaskCardWrapper() {
  /* ---------------- STATIC TASK DATA ---------------- */

  const tasks: TaskType[] = [
    {
      id: 1,
      title: "Update Jira Board",
      description: "Move completed tasks to Done column.",
      completed: true,
      priority: "LOW",
      badge: "ADMIN",
      time: "2:00 AM",
    },
    {
      id: 2,
      title: "Design System Review",
      description:
        "Review the new color palette and typography scale for the mobile app...",
      priority: "HIGH",
      time: "10:00 AM",
    },
    {
      id: 3,
      title: "Client Call @ 2PM",
      description: "Discussion about Q4 roadmap.",
      priority: "MEDIUM",
      time: "2:00 AM",
    },
  ];

  /* ---------------- MAPPING ---------------- */

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            completed={task.completed}
            badge={task.badge}
            priority={task.priority}
            time={task.time}
            users={task.users}
          />
        ))}
      </View>
    </ScrollView>
  );
}
