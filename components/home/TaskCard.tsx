import { useAppColors } from "@/hooks/use-app-colors";
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
  const { colors, fontFamily } = useAppColors();

  const getPriorityStyle = (p: string) => {
    switch (p) {
      case "HIGH":
        return { text: colors.priorityHigh, bg: colors.priorityHighBg };
      case "MEDIUM":
        return { text: colors.priorityMed, bg: colors.priorityMedBg };
      case "LOW":
        return { text: colors.priorityLow, bg: colors.priorityLowBg };
      default:
        return { text: colors.secondaryText, bg: colors.borderColor };
    }
  };

  const priorityStyle = priority ? getPriorityStyle(priority) : null;

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
              style={{ color: colors.text, fontFamily }}
            >
              {title}
            </Text>
 
            <Text
              numberOfLines={2}
              className="text-sm mt-1"
              style={{ color: colors.secondaryText, fontFamily }}
            >
              {description}
            </Text>
          </View>
        </View>
 
        {/* Badge */}
        {priority && priorityStyle && (
          <View
            className="px-3 py-1 rounded-lg"
            style={{ backgroundColor: priorityStyle.bg }}
          >
            <Text
              className="text-xs font-semibold"
              style={{ color: priorityStyle.text, fontFamily }}
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
          <Text className="text-sm" style={{ color: colors.secondaryText, fontFamily }}>
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
