import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

interface DifficultyEnergySectionProps {
  colors: any;
}

const DifficultyEnergySection: React.FC<DifficultyEnergySectionProps> = ({ colors }) => {
  return (
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
  );
};

export default DifficultyEnergySection;
