import {
    ProfileSection,
    SettingItem,
    SettingsCategory,
    SettingsHeader,
    SignOutButton,
} from "@/components/settings";
import { AppText } from "@/components/ui/AppText";
import { useAppColors } from "@/hooks/use-app-colors";
import { useAuth } from "@/hooks/use-auth";
import { useThemeMode } from "@/hooks/use-theme-mode";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const { colors, isDark } = useAppColors();
  const { setMode } = useThemeMode();
  const { user, logout } = useAuth();
  const router = useRouter();

  const [pushNotifications, setPushNotifications] = useState(true);
  const [appLock, setAppLock] = useState(false);

  const handleSignOut = () => {
    logout();
    // Redirect is handled by AuthGuard in _layout
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.background }}
      edges={["top"]}
    >
      <SettingsHeader title="Settings" onBackPress={() => router.back()} />

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 px-4">
        {/* Profile Section */}
        <ProfileSection
          name={user?.email?.split("@")[0] || "User"}
          email={user?.email || "user@app.com"}
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
            icon="keypad-outline"
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
            onPress={() => {}}
          />
        </SettingsCategory>

        <SignOutButton onPress={handleSignOut} />

        {/* App Version */}
        <AppText
          className="text-center text-xs mb-10"
          style={{ color: colors.secondaryText }}
        >
          Productivity App v2.4.1 (Build 842)
        </AppText>
      </ScrollView>
    </SafeAreaView>
  );
}
