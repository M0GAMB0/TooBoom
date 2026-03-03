import { useAppColors } from "@/hooks/use-app-colors";
import { Text, View } from "react-native";

export default function TasksScreen() {
  const { colors } = useAppColors();
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold" style={{ color: colors.text }}>Tasks</Text>
    </View>
  );
}
