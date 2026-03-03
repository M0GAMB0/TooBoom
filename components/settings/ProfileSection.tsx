import { useAppColors } from "@/hooks/use-app-colors";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface ProfileSectionProps {
  name: string;
  email: string;
  plan: string;
  avatarUri: string;
  onEditPress?: () => void;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  name,
  email,
  plan,
  avatarUri,
  onEditPress,
}) => {
  const { colors } = useAppColors();

  return (
    <View className="items-center py-6 flex-row">
      <View className="relative">
        <View className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary">
          <Image
            source={{
              uri: avatarUri,
            }}
            className="w-full h-full"
          />
        </View>
        <TouchableOpacity
          onPress={onEditPress}
          className="absolute bottom-0 right-0 w-8 h-8 rounded-full items-center justify-center border-2"
          style={{
            backgroundColor: colors.primary,
            borderColor: colors.background,
          }}
        >
          <MaterialIcons name="edit" size={16} color={colors.white} />
        </TouchableOpacity>
      </View>

      <View className="ml-6">
        <Text className="text-2xl font-bold" style={{ color: colors.text }}>
          {name}
        </Text>
        <Text className="text-base" style={{ color: colors.secondaryText }}>
          {email}
        </Text>
        <View
          className="mt-2 self-start px-3 py-1 rounded-md"
          style={{ backgroundColor: colors.primary + "20" }}
        >
          <Text className="text-xs font-bold" style={{ color: colors.primary }}>
            {plan}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileSection;
