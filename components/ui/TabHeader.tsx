import { useAppColors } from "@/hooks/use-app-colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { AppText } from "./AppText";

interface TabHeaderProps {
  title: string;
  subtitle?: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  onTitlePress?: () => void;
  showSearch?: boolean;
  onSearchPress?: () => void;
}

export function TabHeader({
  title,
  subtitle,
  leftIcon,
  onTitlePress,
  showSearch = false,
  onSearchPress,
}: TabHeaderProps) {
  const { colors } = useAppColors();
  const router = useRouter();

  const leftContent = (
    <View className="flex-row items-center flex-1 min-w-0">
      {leftIcon && (
        <Ionicons
          name={leftIcon}
          size={28}
          color={colors.primary}
          style={{ marginRight: 10 }}
        />
      )}
      <View className="flex-1">
        {subtitle && (
          <AppText
            className="text-sm font-medium uppercase tracking-wider"
            style={{ color: colors.secondaryText }}
          >
            {subtitle}
          </AppText>
        )}
        <AppText
          className="text-2xl font-extrabold mt-0.5"
          numberOfLines={1}
          style={{ color: colors.text }}
        >
          {title}
        </AppText>
      </View>
    </View>
  );

  return (
    <View className="flex-row items-center justify-between px-6 py-4">
      {/* Left side — tappable when onTitlePress is provided */}
      {onTitlePress ? (
        <TouchableOpacity
          onPress={onTitlePress}
          activeOpacity={0.7}
          className="flex-1 min-w-0 max-w-[70%]"
        >
          {leftContent}
        </TouchableOpacity>
      ) : (
        <View className="flex-1 min-w-0 max-w-[70%]">{leftContent}</View>
      )}

      {/* Right side */}
      <View className="flex-row items-center gap-2">
        {showSearch && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onSearchPress}
            className="rounded-full py-[8px] px-[8px]"
            style={{
              backgroundColor: colors.streakBadge,
              borderWidth: 1,
              borderColor: colors.borderColor,
            }}
          >
            <Ionicons name="search-outline" size={24} color={colors.icon} />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.push("/settings")}
          className="rounded-full py-[8px] px-[8px]"
          style={{
            backgroundColor: colors.streakBadge,
            borderWidth: 1,
            borderColor: colors.borderColor,
          }}
        >
          <Ionicons name="settings-sharp" size={24} color={colors.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
