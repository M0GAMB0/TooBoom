import { useAppColors } from "@/hooks/use-app-colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { AppText } from "../ui/AppText";

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
      className="p-5 rounded-2xl mb-4 border-[1px]"
      style={{ 
        borderColor: colors.borderColor, 
        backgroundColor: colors.cardBackground,
      }}
    >
      <View className="flex-row items-center justify-between mb-3">
        <View className="flex-row items-center flex-1">
          <TouchableOpacity 
            onPress={onToggleComplete}
            className="mr-3"
          >
            <View 
              className="w-6 h-6 rounded-full border-2 items-center justify-center"
              style={isCompleted ? { backgroundColor: colors.primary, borderColor: colors.primary } : { borderColor: colors.secondaryText }}
            >
              {isCompleted && <Ionicons name="checkmark" size={20} color={colors.white} />}
            </View>
          </TouchableOpacity>
          <AppText 
            className={`text-base font-bold flex-1 ${isCompleted ? 'line-through opacity-50' : ''}`}
            style={{ color: colors.text }}
          >
            {title}
          </AppText>
        </View>
        
        <TouchableOpacity onPress={onToggleStar}>
          {isStarred ? (
            <Ionicons name="star" size={26} color={colors.energyLow} />
          ) : (
             <Ionicons name="star-outline" size={26} color={colors.secondaryText} />
          )}
        </TouchableOpacity>
        
        {reminderIcon && !isStarred && (
           <MaterialCommunityIcons name="alarm-snooze" size={26} color={colors.secondaryText} />
        )}
      </View>

      <View className="flex-row items-center mb-4">
        {time && (
          <View className="flex-row items-center mr-4">
            <Ionicons name="time" size={18} color={colors.secondaryText} />
            <AppText className="ml-2 text-base font-medium" style={{ color: colors.secondaryText }}>{time}</AppText>
          </View>
        )}
        {location && (
          <View className="flex-row items-center">
            <Ionicons name="location" size={18} color={colors.secondaryText} />
            <AppText className="ml-2 text-base font-medium" style={{ color: colors.secondaryText }}>{location}</AppText>
          </View>
        )}
      </View>

      <View className="flex-row flex-wrap gap-2">
        {priority && (
          <View 
            className="px-4 py-2 rounded-xl"
            style={{ backgroundColor: priorityStyle?.bg }}
          >
            <AppText className="text-sm font-bold" style={{ color: priorityStyle?.text }}>
              {priority === "high" ? "High Priority" : priority === "med" ? "Med Priority" : "Low Priority"}
            </AppText>
          </View>
        )}
        {energy && (
          <View 
            className="px-4 py-2 rounded-xl flex-row items-center"
            style={{ backgroundColor: energy === "high" ? colors.energyHighBg : colors.energyLowBg }}
          >
             <AppText className="mr-2 text-base">{energy === "high" ? "🧠" : "⚡️"}</AppText>
            <AppText className="text-sm font-bold" style={{ color: energy === "high" ? colors.energyHigh : colors.energyLow }}>
              {energy === "high" ? "High Energy" : "Low Energy"}
            </AppText>
          </View>
        )}
        {difficulty && (
          <View 
            className="px-4 py-2 rounded-xl flex-row items-center"
            style={{ backgroundColor: difficulty === "hard" ? colors.difficultyHardBg : colors.difficultyMedBg }}
          >
            <AppText className="text-sm font-bold" style={{ color: difficulty === "hard" ? "white" : colors.difficultyMed }}>
              {difficulty === "hard" ? "Hard" : "Med Difficulty"}
            </AppText>
          </View>
        )}
      </View>
    </View>
  );
};
