import { Colors } from "@/constants/theme";
import { getCurrentFormattedDate } from "@/src/utils/date";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image, Text, useColorScheme, View } from "react-native";

interface HomeHeaderProps {
  userName?: string;
  streakDays?: number;
}

export default function HomeHeader({
  userName = "Sharan",
  streakDays = 12,
}: HomeHeaderProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const colors = isDark ? Colors.dark : Colors.light;

  const formattedDate = getCurrentFormattedDate();

  return (
    <View
      className="flex-row items-center justify-between px-[24px] py-[16px]"
      style={{ borderBottomWidth: 1, borderColor: colors.borderColor }}
    >
      {/* Left side: Avatar with date and greeting */}
      <View className="flex-row items-center flex-1 min-w-0">
        {/* Avatar */}
        <View
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
        </View>

        {/* Date and Greeting */}
        <View className="flex-1">
          <Text className="text-sm" style={{ color: colors.tabInactive }}>
            {formattedDate}
          </Text>
          <View className="flex-row flex-wrap">
            <Text
              className="text-lg font-semibold"
              style={{ color: colors.text }}
            >
              Hello,{" "}
            </Text>
            <Text
              className="text-lg font-semibold break-keep"
              style={{ color: colors.text }}
            >
              {userName} 👋
            </Text>
          </View>
        </View>
      </View>

      {/* Right side: Streak */}
      <View
        className="flex-row items-center rounded-full py-[8px] px-[16px] gap-[5px]"
        style={{
          backgroundColor: colors.streakBadge,
          borderWidth: 1,
          borderColor: colors.borderColor,
        }}
      >
        <MaterialIcons
          name="local-fire-department"
          size={24}
          color={colors.streak}
        />
        <Text
          className="text-base font-bold ml-1"
          style={{ color: colors.text }}
        >
          {streakDays} Days
        </Text>
      </View>
    </View>
  );
}
