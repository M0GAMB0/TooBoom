import HomeHeader from "@/components/home-header";
import StatsSection from "@/components/home/StatsSection";
import TaskCardWrapper from "@/components/home/TaskCardWrapper";
import TaskDashboardSection from "@/components/home/TaskDashboardSection";
import { FAB } from "@/components/ui/FAB";
import { useAppColors } from "@/hooks/use-app-colors";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { colors } = useAppColors();
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <HomeHeader />
        <View className="flex-1">
          <ScrollView
            showsVerticalScrollIndicator={false}
            className="customContainer"
            contentContainerStyle={{ paddingBottom: 40 }}
          >
            <StatsSection streakDays={12} completedTasks={7} totalTasks={8} />

            <View className="flex-row justify-between items-center mb-5 mt-4">
              <Text
                className="text-[22px] font-bold"
                style={{ color: colors.text }}
              >
                Daily Mission
              </Text>

              <Text style={{ color: colors.primary }}>View all</Text>
            </View>
            <TaskCardWrapper />
            <TaskDashboardSection />
          </ScrollView>
        </View>
        <FAB onPress={() => console.log("FAB pressed")} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
