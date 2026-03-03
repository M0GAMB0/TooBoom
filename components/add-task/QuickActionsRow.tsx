import { NeumorphicCard } from "@/components/NeumorphicCard";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface QuickActionsRowProps {
  colors: any;
}

const QuickActionsRow: React.FC<QuickActionsRowProps> = ({ colors }) => {
  return (
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
  );
};

export default QuickActionsRow;
