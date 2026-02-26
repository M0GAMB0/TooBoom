import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

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
  const scheme = useColorScheme() ?? "light";
  const colors = Colors[scheme];

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
                  colors={["#7C3AED", "#5B13EC"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  className="px-6 py-3 rounded-full"
                  style={{
                    shadowColor: "#7C3AED",
                    shadowOpacity: 0.6,
                    shadowRadius: 14,
                    shadowOffset: {
                      width: 0,
                      height: 6,
                    },
                    elevation: 10,
                  }}
                >
                  <Text className="text-white font-semibold text-base">
                    {tab.label}
                  </Text>
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
              <Text
                className="font-semibold text-base"
                style={{
                  color: colors.secondaryText,
                }}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}
