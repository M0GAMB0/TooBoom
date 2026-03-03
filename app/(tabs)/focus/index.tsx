import { AppText } from "@/components/ui/AppText";
import { useAppColors } from "@/hooks/use-app-colors";
import { View } from "react-native";

export default function FousScreen() {
  const { colors } = useAppColors();
  return (
    <View className="flex-1 items-center justify-center">
      <AppText className="text-xl font-bold" style={{ color: colors.text }}>Fous</AppText>
    </View>
  );
}
