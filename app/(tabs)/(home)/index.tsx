import HomeHeader from "@/components/home-header";
import StatsSection from "@/components/home/StatsSection";
import { ScrollView, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <HomeHeader />
        <View className="flex-1">
          <ScrollView className="customContainer">
            <StatsSection streakDays={12} completedTasks={4} totalTasks={8} />
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
