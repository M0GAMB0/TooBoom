import { useAppColors } from "@/hooks/use-app-colors";
import { getCurrentFormattedDate } from "@/src/utils/date";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

interface HomeHeaderProps {
  title?: string;
  streakDays?: number;
}

export default function HomeHeader({
  title = " Hello, Saikumar 👋",
  streakDays = 12,
}: HomeHeaderProps) {
  const { colors } = useAppColors();
  const router = useRouter();

  const formattedDate = getCurrentFormattedDate();

  return (
    <View
      className="flex-row items-center justify-between container customContainer"
      // style={{ borderBottomWidth: 1, borderColor: colors.borderColor }}
    >
      {/* Left side: Avatar with date and greeting */}
      <View className="flex-row items-center flex-1 min-w-0 max-w-[60%]">
        {/* Avatar */}
        {/* <View
          className="w-12 h-12 rounded-full overflow-hidden mr-3 border border-primary flex-shrink-0"
          style={{
            backgroundColor: colors.primary,
          }}
        >
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=68" }}
            className="w-full h-full"
            alt="Avatar"
          />
        </View> */}

        {/* Date and Greeting */}
        <View className="flex-1">
          <Text
            className="text-sm font-medium uppercase tracking-wider"
            style={{ color: colors.secondaryText }}
          >
            {formattedDate}
          </Text>
          <Text
            className="text-2xl font-bold mt-1"
            numberOfLines={2}
            style={{ color: colors.text }}
          >
            <Text className="whitespace-nowrap">{title}</Text>
          </Text>
        </View>
      </View>

      {/* Right side: settings */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => router.push("/settings")}
        className="flex-row items-center rounded-full py-[8px] px-[8px]"
        style={{
          backgroundColor: colors.streakBadge,
          borderWidth: 1,
          borderColor: colors.borderColor,
        }}
      >
        <Ionicons name="settings-sharp" size={24} color={colors.icon} />
      </TouchableOpacity>
    </View>
  );
}
