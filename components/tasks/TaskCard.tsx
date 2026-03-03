import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface TaskCardProps {
  title: string;
  time?: string;
  location?: string;
  priority?: "high" | "med" | "low";
  energy?: "high" | "low";
  difficulty?: "hard" | "med";
  isCompleted?: boolean;
  isStarred?: boolean;
  reminderIcon?: boolean;
  onToggleComplete?: () => void;
  onToggleStar?: () => void;
}

export const TaskCard = ({
  title,
  time,
  location,
  priority,
  energy,
  difficulty,
  isCompleted = false,
  isStarred = false,
  reminderIcon = false,
  onToggleComplete,
  onToggleStar,
}: TaskCardProps) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  const getPriorityStyle = (p: string) => {
    switch (p) {
      case "high":
        return { text: theme.priorityHigh, bg: theme.priorityHighBg };
      case "med":
        return { text: theme.priorityMed, bg: theme.priorityMedBg };
      case "low":
        return { text: theme.priorityLow, bg: theme.priorityLowBg };
      default:
        return { text: theme.secondaryText, bg: theme.borderColor };
    }
  };

  const priorityStyle = priority ? getPriorityStyle(priority) : null;

  return (
    <View 
      className="p-4 rounded-3xl mb-3 border-[1px]"
      style={{ borderColor: theme.borderColor, backgroundColor: theme.cardBackground }}
    >
      <View className="flex-row items-center justify-between mb-2">
        <View className="flex-row items-center flex-1">
          <TouchableOpacity 
            onPress={onToggleComplete}
            className="mr-3"
          >
            <View 
              className={`w-7 h-7 rounded-full border-2 items-center justify-center ${isCompleted ? 'bg-primary border-primary' : 'border-secondaryText'}`}
              style={isCompleted ? { backgroundColor: theme.primary, borderColor: theme.primary } : { borderColor: theme.secondaryText }}
            >
              {isCompleted && <Ionicons name="checkmark" size={18} color="white" />}
            </View>
          </TouchableOpacity>
          <Text 
            className={`text-lg font-semibold flex-1 ${isCompleted ? 'line-through opacity-50' : ''}`}
            style={{ color: theme.text }}
          >
            {title}
          </Text>
        </View>
        
        <TouchableOpacity onPress={onToggleStar}>
          {isStarred ? (
            <Ionicons name="star" size={24} color="#FBBF24" />
          ) : (
             <Ionicons name="star-outline" size={24} color={theme.secondaryText} />
          )}
        </TouchableOpacity>
        
        {reminderIcon && !isStarred && (
           <MaterialCommunityIcons name="alarm-snooze" size={24} color={theme.secondaryText} />
        )}
      </View>

      <View className="flex-row items-center mb-3">
        {time && (
          <View className="flex-row items-center mr-4">
            <Ionicons name="time-outline" size={16} color={theme.secondaryText} />
            <Text className="ml-1 text-sm" style={{ color: theme.secondaryText }}>{time}</Text>
          </View>
        )}
        {location && (
          <View className="flex-row items-center">
            <Ionicons name="location-outline" size={16} color={theme.secondaryText} />
            <Text className="ml-1 text-sm" style={{ color: theme.secondaryText }}>{location}</Text>
          </View>
        )}
      </View>

      <View className="flex-row flex-wrap gap-2">
        {priority && (
          <View 
            className="px-3 py-1 rounded-lg"
            style={{ backgroundColor: priorityStyle?.bg }}
          >
            <Text className="text-xs font-bold" style={{ color: priorityStyle?.text }}>
              {priority === "high" ? "High Priority" : priority === "med" ? "Med Priority" : "Low Priority"}
            </Text>
          </View>
        )}
        {energy && (
          <View 
            className="px-3 py-1 rounded-lg flex-row items-center"
            style={{ backgroundColor: energy === "high" ? theme.energyHighBg : theme.energyLowBg }}
          >
             <Text className="mr-1">{energy === "high" ? "🧠" : "⚡️"}</Text>
            <Text className="text-xs font-bold" style={{ color: energy === "high" ? theme.energyHigh : theme.energyLow }}>
              {energy === "high" ? "High Energy" : "Low Energy"}
            </Text>
          </View>
        )}
        {difficulty && (
          <View 
            className="px-3 py-1 rounded-lg flex-row items-center"
            style={{ backgroundColor: difficulty === "hard" ? theme.difficultyHardBg : theme.difficultyMedBg }}
          >
            <Text className="text-xs font-bold" style={{ color: difficulty === "hard" ? theme.difficultyHard : theme.difficultyMed }}>
              {difficulty === "hard" ? "Hard" : "Med Difficulty"}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
