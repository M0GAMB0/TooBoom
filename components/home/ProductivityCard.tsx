import { useAppColors } from "@/hooks/use-app-colors";
import React from "react";
import { Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

type ProductivityCardProps = {
  percentage: number;
};

const ProductivityCard: React.FC<ProductivityCardProps> = ({ percentage }) => {
  const { colors } = useAppColors();

  return (
    <View
      className="w-[48%] border rounded-2xl p-4 items-center justify-center shadow-2xl"
      style={{
        backgroundColor: colors.cardBackground,
        borderColor: colors.borderColor,
      }}
    >
      <AnimatedCircularProgress
        size={90}
        width={8}
        fill={percentage}
        tintColor={colors.primary}
        backgroundColor={colors.borderColor}
        rotation={0}
      >
        {() => (
          <Text className=" text-2xl font-bold" style={{ color: colors.text }}>
            {percentage}%
          </Text>
        )}
      </AnimatedCircularProgress>

      <Text className="text-sm mt-3" style={{ color: colors.secondaryText }}>
        Productivity
      </Text>
    </View>
  );
};

export default ProductivityCard;
