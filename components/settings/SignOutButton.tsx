import { useAppColors } from "@/hooks/use-app-colors";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { AppText } from "../ui/AppText";

interface SignOutButtonProps {
  onPress: () => void;
}

const SignOutButton: React.FC<SignOutButtonProps> = ({ onPress }) => {
  const { colors } = useAppColors();

  return (
    <TouchableOpacity
      className="flex-row items-center justify-center py-4 rounded-2xl mb-8"
      style={{
        backgroundColor: colors.errorRed + "10",
        borderWidth: 1,
        borderColor: colors.errorRed + "30",
      }}
      onPress={onPress}
    >
      <MaterialIcons name="logout" size={24} color={colors.errorRed} />
      <AppText className="ml-2 text-lg font-bold" style={{ color: colors.errorRed }}>
        Sign Out
      </AppText>
    </TouchableOpacity>
  );
};

export default SignOutButton;
