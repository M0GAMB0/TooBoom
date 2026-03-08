import { useAppColors } from "@/hooks/use-app-colors";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { AppText } from "../ui/AppText";

type TabType = {
  key: string;
  label: string;
};

type Props = {
  tabs: TabType[];
  activeTab: string;
  onChange: (key: string) => void;
};

export default function FloatingSegmentTabs({
  tabs,
  activeTab,
  onChange,
}: Props) {
  const { colors } = useAppColors();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mb-6"
    >
      <View className="flex-row">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;

          if (isActive) {
            return (
              <TouchableOpacity
                key={tab.key}
                onPress={() => onChange(tab.key)}
                className="mr-3"
              >
                <LinearGradient
                  colors={[colors.gradientStart, colors.gradientEnd]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  className="px-6 py-3 rounded-full"
                  style={{
                    shadowColor: colors.gradientStart,
                    shadowOpacity: 0.6,
                    shadowRadius: 14,
                    shadowOffset: {
                      width: 0,
                      height: 6,
                    },
                    elevation: 10,
                  }}
                >
                  <AppText className="font-semibold text-base" style={{ color: colors.white }}>
                    {tab.label}
                  </AppText>
                </LinearGradient>
              </TouchableOpacity>
            );
          }

          return (
            <TouchableOpacity
              key={tab.key}
              onPress={() => onChange(tab.key)}
              className="px-6 py-3 rounded-full mr-3"
              style={{
                backgroundColor: colors.cardBackground,
                borderWidth: 1,
                borderColor: colors.borderColor,
              }}
            >
              <AppText
                className="font-semibold text-base"
                style={{
                  color: colors.secondaryText,
                }}
              >
                {tab.label}
              </AppText>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}
