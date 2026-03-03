import { useAppColors } from "@/hooks/use-app-colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Switch, TouchableOpacity, View } from "react-native";
import { AppText } from "../ui/AppText";

interface SettingItemProps {
  icon: string;
  title: string;
  value?: string | boolean;
  type?: "arrow" | "switch" | "color";
  onPress?: () => void;
  iconType?: "ionicons" | "material";
}

const SettingItem: React.FC<SettingItemProps> = ({
  icon,
  title,
  value,
  type = "arrow",
  onPress,
  iconType = "ionicons",
}) => {
  const { colors } = useAppColors();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={type === "switch"}
      className="flex-row items-center justify-between py-4 px-4 overflow-hidden"
    >
      <View className="flex-row items-center flex-1">
        <View
          className="w-10 h-10 rounded-xl items-center justify-center mr-4"
          style={{ backgroundColor: colors.borderColor + "20" }}
        >
          {iconType === "ionicons" ? (
            <Ionicons name={icon as any} size={22} color={colors.text} />
          ) : (
            <MaterialIcons name={icon as any} size={22} color={colors.text} />
          )}
        </View>
        <AppText className="text-lg font-medium" style={{ color: colors.text }}>
          {title}
        </AppText>
      </View>

      <View className="flex-row items-center">
        {type === "arrow" && (
          <>
            {value && (
              <AppText
                className="mr-2 text-base"
                style={{ color: colors.secondaryText }}
              >
                {value}
              </AppText>
            )}
            <Ionicons name="chevron-forward" size={18} color={colors.text} />
          </>
        )}
        {type === "switch" && (
          <Switch
            value={value as boolean}
            onValueChange={onPress as any}
            trackColor={{ false: colors.borderColor, true: colors.primary }}
            thumbColor={colors.white}
          />
        )}
        {type === "color" && (
          <View
            className="w-6 h-6 rounded-full"
            style={{ backgroundColor: colors.primary }}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SettingItem;
