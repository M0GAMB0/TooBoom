import { useAppColors } from "@/hooks/use-app-colors";
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
  const { colors } = useAppColors();

  const getPriorityStyle = (p: string) => {
    switch (p) {
      case "high":
        return { text: colors.priorityHigh, bg: colors.priorityHighBg };
      case "med":
        return { text: colors.priorityMed, bg: colors.priorityMedBg };
      case "low":
        return { text: colors.priorityLow, bg: colors.priorityLowBg };
      default:
        return { text: colors.secondaryText, bg: colors.borderColor };
    }
  };

  const priorityStyle = priority ? getPriorityStyle(priority) : null;

  return (
    <View 
      className="p-4 rounded-3xl mb-3 border-[1px]"
      style={{ borderColor: colors.borderColor, backgroundColor: colors.cardBackground }}
    >
      <View className="flex-row items-center justify-between mb-2">
        <View className="flex-row items-center flex-1">
          <TouchableOpacity 
            onPress={onToggleComplete}
            className="mr-3"
          >
            <View 
              className="w-7 h-7 rounded-full border-2 items-center justify-center"
              style={isCompleted ? { backgroundColor: colors.primary, borderColor: colors.primary } : { borderColor: colors.secondaryText }}
            >
              {isCompleted && <Ionicons name="checkmark" size={18} color="white" />}
            </View>
          </TouchableOpacity>
          <Text 
            className={`text-lg font-semibold flex-1 ${isCompleted ? 'line-through opacity-50' : ''}`}
            style={{ color: colors.text }}
          >
            {title}
          </Text>
        </View>
        
        <TouchableOpacity onPress={onToggleStar}>
          {isStarred ? (
            <Ionicons name="star" size={24} color="#FBBF24" />
          ) : (
             <Ionicons name="star-outline" size={24} color={colors.secondaryText} />
          )}
        </TouchableOpacity>
        
        {reminderIcon && !isStarred && (
           <MaterialCommunityIcons name="alarm-snooze" size={24} color={colors.secondaryText} />
        )}
      </View>

      <View className="flex-row items-center mb-3">
        {time && (
          <View className="flex-row items-center mr-4">
            <Ionicons name="time-outline" size={16} color={colors.secondaryText} />
            <Text className="ml-1 text-sm" style={{ color: colors.secondaryText }}>{time}</Text>
          </View>
        )}
        {location && (
          <View className="flex-row items-center">
            <Ionicons name="location-outline" size={16} color={colors.secondaryText} />
            <Text className="ml-1 text-sm" style={{ color: colors.secondaryText }}>{location}</Text>
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
            style={{ backgroundColor: energy === "high" ? colors.energyHighBg : colors.energyLowBg }}
          >
             <Text className="mr-1">{energy === "high" ? "🧠" : "⚡️"}</Text>
            <Text className="text-xs font-bold" style={{ color: energy === "high" ? colors.energyHigh : colors.energyLow }}>
              {energy === "high" ? "High Energy" : "Low Energy"}
            </Text>
          </View>
        )}
        {difficulty && (
          <View 
            className="px-3 py-1 rounded-lg flex-row items-center"
            style={{ backgroundColor: difficulty === "hard" ? colors.difficultyHardBg : colors.difficultyMedBg }}
          >
            <Text className="text-xs font-bold" style={{ color: difficulty === "hard" ? colors.difficultyHard : colors.difficultyMed }}>
              {difficulty === "hard" ? "Hard" : "Med Difficulty"}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
