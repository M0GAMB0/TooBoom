import { NeumorphicCard } from "@/components/NeumorphicCard";
import { useAppColors } from "@/hooks/use-app-colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

interface Option {
  label: string;
  value: string;
  icon?: string;
}

interface Props {
  label: string;
  options: Option[];
  selectedValue: string;
  onSelect: (value: string) => void;
  onAddPress?: () => void;
}

export default function SelectionGroup({
  label,
  options,
  selectedValue,
  onSelect,
  onAddPress,
}: Props) {
  const { colors, isDark } = useAppColors();

  return (
    <View className="px-5  mt-6">
      <Text
        className="text-base font-semibold mb-3"
        style={{ color: colors.secondaryText }}
      >
        {label}
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 5, paddingVertical: 10 }}
      >
        <View className="flex-row items-center">
          {options.map((option) => {
            const isSelected = selectedValue === option.value;
            // if (isSelected) {
            //   return (
            //     <TouchableOpacity
            //       key={option.value}
            //       onPress={() => onSelect(option.value)}
            //       className="px-6 py-3 rounded-2xl mr-4 flex-row items-center"
            //       style={{
            //         backgroundColor: colors.primary,
            //         borderWidth: 1,
            //         borderColor: colors.primary,
            //       }}
            //     >
            //       {option.icon && (
            //         <Text className="mr-2" style={{ color: "white" }}>
            //           {option.icon}
            //         </Text>
            //       )}
            //       <Text
            //         className="font-bold text-base text-white"
            //       >
            //         {option.label}
            //       </Text>
            //     </TouchableOpacity>
            //   );
            // }

            return (
              <NeumorphicCard
                key={option.value}
                colors={colors}
                style={{ marginRight: 16 }}
              >
                <TouchableOpacity
                  onPress={() => onSelect(option.value)}
                  className="px-6 h-15 py-3 rounded-2xl flex-row items-center"
                  style={{
                    backgroundColor: isSelected? colors.primary : colors.cardBackground,
                    borderWidth: 1,
                    borderColor: isSelected? colors.primary : colors.borderColor,
                  }}
                >
                  {option.icon && (
                    <Text
                      className="mr-2"
                      style={{ color: colors.text }}
                    >
                      {option.icon}
                    </Text>
                  )}
                  <Text
                    className="font-bold text-base"
                    style={{ color: colors.text }}
                  >
                    {option.label}
                  </Text>
                </TouchableOpacity>
              </NeumorphicCard>
            );
          })}
          {onAddPress && (
            <NeumorphicCard colors={colors}>
              <TouchableOpacity
                onPress={onAddPress}
                className="px-6 h-15 py-4 rounded-2xl border-2 border-dashed flex-row items-center"
                style={{
                  backgroundColor: colors.cardBackground,
                  borderColor: colors.borderColor,
                }}
              >
                <Ionicons name="add" size={24} color={colors.primary} />
              </TouchableOpacity>
            </NeumorphicCard>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
