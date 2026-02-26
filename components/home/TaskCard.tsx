import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Check } from "lucide-react-native";
import { Image, Text, View } from "react-native";

type Props = {
  title: string;
  description: string;
  completed?: boolean;
  badge?: string;
  priority?: "HIGH" | "LOW" | "MEDIUM";
  time?: string;
  users?: string[];
};

export default function TaskCard({
  title,
  description,
  completed,
  badge,
  priority,
  time,
  users = [],
}: Props) {
  const COLOR_MAP = {
    HIGH: {
      text: "text-customRed",
      bg: "bg-errorRed/10",
    },

    MEDIUM: {
      text: "text-orange-500",
      bg: "bg-orange-500/10",
    },

    LOW: {
      text: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
  };
  const scheme = useColorScheme() ?? "light";
  const colors = Colors[scheme];

  return (
    <View
      className="w-full rounded-2xl p-4 mb-4 shadow-lg"
      style={{
        backgroundColor: colors.cardBackground,
        borderColor: colors.borderColor,
        borderWidth: 1,
      }}
    >
      {/* Top Row */}
      <View className="flex-row items-start justify-between">
        <View className="flex-row flex-1">
          {/* Status Icon */}
          <View
            className={`w-8 h-8 rounded-full items-center justify-center mr-3 ${
              completed ? "" : "border-2"
            }`}
            style={{
              backgroundColor: completed ? colors.primary : "transparent",
              borderColor: colors.primary,
            }}
          >
            {completed && <Check size={18} color={"#fff"} />}
          </View>

          {/* Title + Desc */}
          <View className="flex-1">
            <Text
              className={`text-base font-semibold ${
                completed ? "line-through" : ""
              }`}
              style={{ color: colors.text }}
            >
              {title}
            </Text>

            <Text
              numberOfLines={2}
              className="text-sm mt-1"
              style={{ color: colors.secondaryText }}
            >
              {description}
            </Text>
          </View>
        </View>

        {/* Badge */}
        {priority && (
          <View
            className={`px-3 py-1 rounded-lg ${COLOR_MAP[priority]?.bg || ""}`}
          >
            <Text
              className={`text-xs font-semibold ${COLOR_MAP[priority]?.text || ""}`}
            >
              {priority}
            </Text>
          </View>
        )}
      </View>

      {/* Bottom Row */}
      {!completed && (
        <View className="flex-row items-center mt-3 justify-between">
          {/* Time */}
          <Text className="text-sm" style={{ color: colors.secondaryText }}>
            🕒 {time}
          </Text>

          {/* Users */}
          <View className="flex-row">
            {users.map((user, i) => (
              <Image
                key={i}
                source={{ uri: user }}
                className="w-7 h-7 rounded-full -ml-2 border-2"
                style={{ borderColor: colors.cardBackground }}
              />
            ))}
          </View>
        </View>
      )}
    </View>
  );
}
