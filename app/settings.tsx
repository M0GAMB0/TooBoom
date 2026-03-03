import {
    ProfileSection,
    SettingItem,
    SettingsCategory,
    SettingsHeader,
    SignOutButton,
} from "@/components/settings";
import { useAppColors } from "@/hooks/use-app-colors";
import { useThemeMode } from "@/hooks/use-theme-mode";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const { colors, isDark } = useAppColors();
  const { setMode } = useThemeMode();
  const router = useRouter();

  const [pushNotifications, setPushNotifications] = useState(true);
  const [appLock, setAppLock] = useState(false);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.background }}
      edges={["top"]}
    >
      <SettingsHeader title="Settings" onBackPress={() => router.back()} />

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 px-4">
        {/* Profile Section */}
        <ProfileSection
          name="Alex Thompson"
          email="alex.t@productivity.app"
          plan="PREMIUM PLAN"
          avatarUri="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
          onEditPress={() => {}}
        />

        {/* Categories */}
        <SettingsCategory title="Appearance">
          <SettingItem
            icon="moon-outline"
            title="Dark Mode"
            type="switch"
            value={isDark}
            onPress={() => setMode(isDark ? "light" : "dark")}
          />
          <SettingItem
            icon="color-palette-outline"
            title="Appearance"
            onPress={() => router.push("/appearance")}
          />
        </SettingsCategory>

        <SettingsCategory title="Notifications">
          <SettingItem
            icon="notifications-outline"
            title="Push Notifications"
            type="switch"
            value={pushNotifications}
            onPress={() => setPushNotifications(!pushNotifications)}
          />
          <SettingItem
            icon="alarm-outline"
            title="Reminders"
            onPress={() => {}}
          />
        </SettingsCategory>

        <SettingsCategory title="Security">
          <SettingItem
            icon="lock-closed-outline"
            title="App Lock"
            type="switch"
            value={appLock}
            onPress={() => setAppLock(!appLock)}
          />
          <SettingItem
            icon="dialpad-outline"
            title="Change PIN"
            onPress={() => {}}
          />
        </SettingsCategory>

        <SettingsCategory title="Data Management">
          <SettingItem
            icon="cloud-upload-outline"
            title="Backup & Export"
            onPress={() => {}}
          />
          <SettingItem
            icon="storage"
            title="Import Data"
            iconType="material"
            onPress={() => {}}
          />
        </SettingsCategory>

        <SignOutButton onPress={() => {}} />

        {/* App Version */}
        <Text
          className="text-center text-xs mb-10"
          style={{ color: colors.secondaryText }}
        >
          Productivity App v2.4.1 (Build 842)
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
