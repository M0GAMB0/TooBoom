import { AppText } from "@/components/ui/AppText";
import { useAppColors } from "@/hooks/use-app-colors";
import React, { useEffect, useRef } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";

const DAY_NAMES = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

interface PlannerDatePickerProps {
  year: number;
  month: number; // 0-indexed
  selectedDate: number;
  onDateChange: (date: number) => void;
}

export function PlannerDatePicker({
  year,
  month,
  selectedDate,
  onDateChange,
}: PlannerDatePickerProps) {
  const { colors } = useAppColors();
  const scrollRef = useRef<ScrollView>(null);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const dates = Array.from({ length: daysInMonth }, (_, i) => {
    const d = new Date(year, month, i + 1);
    return { day: DAY_NAMES[d.getDay()], date: i + 1 };
  });

  // Scroll to selected date
  useEffect(() => {
    const ITEM_WIDTH = 82; // 70px width + 12px gap
    const offset = Math.max(0, (selectedDate - 1) * ITEM_WIDTH - 24);
    setTimeout(() => scrollRef.current?.scrollTo({ x: offset, animated: true }), 100);
  }, [selectedDate, month]);

  return (
    <View className="mb-8">
      <ScrollView
        ref={scrollRef}
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
                  className="text-[10px] mb-2 uppercase"
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
                  <View className="w-1 h-1 rounded-full bg-white mt-1 opacity-100" />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
