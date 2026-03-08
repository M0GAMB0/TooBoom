import { AppText } from "@/components/ui/AppText";
import { useAppColors } from "@/hooks/use-app-colors";
import React from "react";
import { TouchableOpacity, View } from "react-native";

interface PlannerTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function PlannerTabs({ activeTab, onTabChange }: PlannerTabsProps) {
  const { colors, fontFamily } = useAppColors();
  const tabs = ["Day", "Week", "Month"];

  return (
    <View className="px-6 mb-6">
      <View 
        className="flex-row rounded-2xl p-1"
        style={{ 
            backgroundColor: colors.mutedBackground, 
            borderWidth: 1, 
            borderColor: colors.borderColor 
        }}
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => onTabChange(tab)}
            className="flex-1 py-2.5 rounded-xl items-center"
            style={{ 
              backgroundColor: activeTab === tab ? colors.primary : 'transparent',
              shadowColor: colors.shadow,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: activeTab === tab ? 0.05 : 0,
              shadowRadius: 4,
              elevation: activeTab === tab ? 1 : 0,
            }}
          >
            <AppText 
              className="font-bold text-lg" 
              style={{ 
                color: activeTab === tab ? colors.text : colors.secondaryText,
                fontFamily 
              }}
            >
              {tab}
            </AppText>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
