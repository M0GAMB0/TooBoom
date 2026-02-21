import { useAppColors } from "@/hooks/use-app-colors";
import { Stack } from "expo-router";

export default function TabLayout() {
  const { colors } = useAppColors();

  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Tasks",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
