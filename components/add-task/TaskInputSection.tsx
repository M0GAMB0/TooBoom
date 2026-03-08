import { NeumorphicCard } from "@/components/NeumorphicCard";
import { useAppColors } from "@/hooks/use-app-colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";

interface Props {
  title: string;
  setTitle: (text: string) => void;
  description: string;
  setDescription: (text: string) => void;
}

export default function TaskInputSection({
  title,
  setTitle,
  description,
  setDescription,
}: Props) {
  const { colors, fontFamily } = useAppColors();

  return (
    <View className="px-5 mt-4">
      <TextInput
        className="text-3xl font-bold py-2"
        placeholder="What needs to be done?"
        placeholderTextColor={colors.secondaryText}
        style={{ color: colors.text, fontFamily }}
        value={title}
        onChangeText={setTitle}
        multiline
      />

      <NeumorphicCard
        colors={colors}
        style={{ marginTop: 24, marginHorizontal: 4 }}
      >
        <View
          className="rounded-2xl p-4 flex-row"
          style={{ backgroundColor: colors.cardBackground }}
        >
          <TextInput
            className="flex-1 text-lg"
            placeholder="Add details, notes, or links..."
            placeholderTextColor={colors.secondaryText}
            style={{ color: colors.text, minHeight: 120, fontFamily }}
            value={description}
            onChangeText={setDescription}
            multiline
            textAlignVertical="top"
          />
          <View className="justify-end items-center space-y-4 ml-2">
            <Ionicons name="attach" size={24} color={colors.secondaryText} />
            <Ionicons
              name="image-outline"
              size={24}
              color={colors.secondaryText}
            />
          </View>
        </View>
      </NeumorphicCard>
    </View>
  );
}
