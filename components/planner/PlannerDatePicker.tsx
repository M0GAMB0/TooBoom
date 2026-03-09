import { AppText } from "@/components/ui/AppText";
import { useAppColors } from "@/hooks/use-app-colors";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";

interface PlannerDatePickerProps {
  selectedDate: number;
  onDateChange: (date: number) => void;
}

export function PlannerDatePicker({
  selectedDate,
  onDateChange,
}: PlannerDatePickerProps) {
  const { colors } = useAppColors();

  const dates = [
    { day: "MON", date: 10 },
    { day: "TUE", date: 11, active: true },
    { day: "WED", date: 12 },
    { day: "THU", date: 13 },
    { day: "FRI", date: 14 },
    { day: "SAT", date: 15 },
  ];

  return (
    <View className="mb-8">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24 }}
      >
        <View className="flex-row gap-3">
          {dates.map((item) => {
            const isSelected = selectedDate === item.date;
            return (
              <TouchableOpacity
                key={item.date}
                onPress={() => onDateChange(item.date)}
                className="w-[70px] py-5 rounded-3xl items-center justify-center"
                style={{
                  backgroundColor: isSelected
                    ? colors.primary
                    : colors.cardBackground,
                  shadowColor: isSelected ? colors.primary : colors.shadow,
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: isSelected ? 0.3 : 0.05,
                  shadowRadius: 15,
                  elevation: isSelected ? 10 : 2,
                }}
              >
                <AppText
                  className="text-[10px]  mb-2 uppercase"
                  weight="bold"
                  style={{
                    color: isSelected ? colors.white : colors.secondaryText,
                  }}
                >
                  {item.day}
                </AppText>
                <AppText
                  className="text-2xl"
                  weight="bold"
                  style={{
                    color: isSelected ? colors.white : colors.text,
                  }}
                >
                  {item.date}
                </AppText>
                {isSelected && (
                  <View
                    className={`w-1 h-1 rounded-full bg-white mt-1 ${isSelected ? "opacity-100" : "opacity-0"}`}
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
