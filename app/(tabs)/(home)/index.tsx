import HomeHeader from "@/components/home-header";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <HomeHeader />
    </SafeAreaView>
  );
}
