import { NeumorphicCard } from "@/components/NeumorphicCard";
import { useAppColors } from "@/hooks/use-app-colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { AppText } from "../ui/AppText";

interface Subtask {
  id: string;
  text: string;
  completed: boolean;
}

interface Props {
  subtasks: Subtask[];
  onAddSubtask: () => void;
  onUpdateSubtask: (id: string, text: string) => void;
  onToggleSubtask: (id: string) => void;
}

export default function SubtaskList({
  subtasks,
  onAddSubtask,
  onUpdateSubtask,
  onToggleSubtask,
}: Props) {
  const { colors, fontFamily } = useAppColors();

  return (
    <View className="px-5 mt-8">
      <View className="flex-row justify-between items-center mb-4">
        <AppText className="text-lg font-bold" style={{ color: colors.text }}>
          Subtasks
        </AppText>
        <AppText className="text-sm font-semibold" style={{ color: colors.primary }}>
          {subtasks.filter((s) => s.completed).length}/{subtasks.length} Done
        </AppText>
      </View>

      {subtasks.map((subtask) => (
        <NeumorphicCard
          key={subtask.id}
          colors={colors}
          style={{ marginBottom: 16, marginHorizontal: 2 }}
        >
          <View
            className="flex-row items-center p-4 rounded-2xl"
            style={{ backgroundColor: colors.cardBackground }}
          >
            <TouchableOpacity onPress={() => onToggleSubtask(subtask.id)}>
              <Ionicons
                name={subtask.completed ? "checkbox" : "square-outline"}
                size={24}
                color={subtask.completed ? colors.primary : colors.secondaryText}
              />
            </TouchableOpacity>
            <TextInput
              className="flex-1 ml-3 text-base"
              value={subtask.text}
              onChangeText={(text) => onUpdateSubtask(subtask.id, text)}
              placeholder="New subtask..."
              placeholderTextColor={colors.secondaryText}
              style={{
                color: subtask.completed ? colors.secondaryText : colors.text,
                fontFamily
              }}
            />
          </View>
        </NeumorphicCard>
      ))}

      <TouchableOpacity
        onPress={onAddSubtask}
        className="flex-row items-center p-4 rounded-2xl border-dashed border-2 justify-center mt-2"
        style={{ borderColor: colors.borderColor }}
      >
        <Ionicons name="add" size={24} color={colors.primary} />
        <AppText className="ml-2 font-bold" style={{ color: colors.primary }}>
          Add Subtask
        </AppText>
      </TouchableOpacity>
    </View>
  );
}
