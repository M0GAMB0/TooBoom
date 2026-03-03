import { AppText } from '@/components/ui/AppText';
import { useAppColors } from "@/hooks/use-app-colors";
import { Link } from 'expo-router';
import { StatusBar, View } from 'react-native';

export default function ModalScreen() {
  const { colors } = useAppColors();
  return (
    <View 
      className="flex-1 items-center justify-center p-5"
      style={{ backgroundColor: colors.background }}
    >
      <AppText className="text-2xl font-bold" style={{ color: colors.text }}>This is a modal</AppText>
      <Link href="/" dismissTo className="mt-4 py-4">
        <AppText className="text-blue-500 text-lg">Go to home screen</AppText>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}
