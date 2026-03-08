import { AppText } from "@/components/ui/AppText";
import { useAppColors } from "@/hooks/use-app-colors";
import { useAuth } from "@/hooks/use-auth";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function LoginScreen() {
  const { colors, isDark, fontFamily } = useAppColors();
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please enter both email and password.",
      });
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      if (email === "admin@gmail.com" && password === "admin") {
        login(email);
        router.replace("/(tabs)/(home)");
      } else {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Invalid credentials.",
        });
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={["top"]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View className="px-6 pt-10" style={{ backgroundColor: colors.background }}>
            {/* LOGO AREA */}
            <View className="items-center mb-8">
              <View 
                className="w-16 h-16 rounded-2xl justify-center items-center" 
                style={{ backgroundColor: colors.primary + '1A' }}
              >
                <Ionicons name="checkmark-done" size={32} color={colors.primary} />
              </View>
            </View>

            {/* WELCOME HEADER */}
            <View className="items-center mb-10">
              <AppText 
                className="text-3xl font-bold mb-2" 
                style={{ color: colors.text, fontFamily }}
              >
                Welcome back
              </AppText>
              <AppText 
                className="text-base" 
                style={{ color: colors.secondaryText, fontFamily }}
              >
                Please enter your details to sign in
              </AppText>
            </View>

            {/* FORM */}
            <View className="w-full">
              {/* EMAIL */}
              <View className="mb-5">
                <TextInput
                  placeholder="Email address"
                  placeholderTextColor={colors.secondaryText}
                  className="border rounded-xl px-4 py-3.5 text-base"
                  style={{ 
                    backgroundColor: colors.cardBackground, 
                    borderColor: colors.borderColor,
                    color: colors.text,
                    fontFamily
                  }}
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
              </View>

              {/* PASSWORD */}
              <View className="mb-5">
                <View 
                  className="border rounded-xl flex-row items-center"
                  style={{ 
                    backgroundColor: colors.cardBackground, 
                    borderColor: colors.borderColor 
                  }}
                >
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor={colors.secondaryText}
                    secureTextEntry={!showPassword}
                    className="flex-1 px-4 py-3.5 text-base"
                    style={{ color: colors.text, fontFamily }}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    className="px-4"
                  >
                    <Ionicons
                      name={showPassword ? "eye-off" : "eye"}
                      size={20}
                      color={colors.secondaryText}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* REMEMBER ME & FORGOT */}
              <View className="flex-row justify-between items-center mb-6">
                <TouchableOpacity
                  className="flex-row items-center"
                  onPress={() => setRememberMe(!rememberMe)}
                >
                  <View
                    className="w-5 h-5 rounded-md border mr-2 justify-center items-center"
                    style={{ 
                      borderColor: colors.borderColor,
                      backgroundColor: rememberMe ? colors.primary : colors.cardBackground
                    }}
                  >
                    {rememberMe && (
                      <Ionicons name="checkmark" size={14} color={colors.white} />
                    )}
                  </View>
                  <AppText 
                    className="text-sm" 
                    style={{ color: colors.secondaryText, fontFamily }}
                  >
                    Remember me
                  </AppText>
                </TouchableOpacity>

                <TouchableOpacity>
                  <AppText 
                    className="text-sm font-bold" 
                    style={{ color: colors.primary, fontFamily }}
                  >
                    Forgot password?
                  </AppText>
                </TouchableOpacity>
              </View>

              {/* LOGIN BUTTON */}
              <TouchableOpacity
                className="rounded-xl py-4 items-center shadow-lg"
                style={{ 
                  backgroundColor: colors.primary,
                  shadowColor: colors.primary,
                }}
                onPress={handleLogin}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator color={colors.white} />
                ) : (
                  <AppText 
                    className="text-lg font-bold" 
                    style={{ color: colors.white, fontFamily }}
                  >
                    Login
                  </AppText>
                )}
              </TouchableOpacity>

              {/* DIVIDER */}
              <View className="flex-row items-center my-8">
                <View className="flex-1 h-px" style={{ backgroundColor: colors.borderColor }} />
                <AppText 
                  className="text-sm mx-3" 
                  style={{ color: colors.secondaryText, fontFamily }}
                >
                  Or continue with
                </AppText>
                <View className="flex-1 h-px" style={{ backgroundColor: colors.borderColor }} />
              </View>

              {/* SOCIAL LOGIN */}
              <View className="flex-row justify-between gap-4 mb-8">
                <TouchableOpacity 
                  className="flex-1 flex-row items-center justify-center border rounded-xl py-3"
                  style={{ backgroundColor: colors.cardBackground, borderColor: colors.borderColor }}
                >
                  <Ionicons name="logo-google" size={20} color="#EA4335" />
                  <AppText 
                    className="ml-2 text-sm font-semibold" 
                    style={{ color: colors.text, fontFamily }}
                  >
                    Google
                  </AppText>
                </TouchableOpacity>

                <TouchableOpacity 
                  className="flex-1 flex-row items-center justify-center border rounded-xl py-3"
                  style={{ backgroundColor: colors.cardBackground, borderColor: colors.borderColor }}
                >
                  <Ionicons name="logo-apple" size={20} color={isDark ? colors.white : "#000"} />
                  <AppText 
                    className="ml-2 text-sm font-semibold" 
                    style={{ color: colors.text, fontFamily }}
                  >
                    Apple
                  </AppText>
                </TouchableOpacity>
              </View>

              {/* SIGN UP LINK */}
              <View className="flex-row justify-center w-full items-center mb-10 ">
                <AppText 
                  className="text-sm" 
                  style={{ color: colors.secondaryText, fontFamily }}
                >
                  Don't have an account?{" "}
                  
                </AppText>
                <TouchableOpacity className="" onPress={() => router.push("/(auth)/signup")}>
                    <AppText className="font-bold" style={{ color: colors.primary }}>Sign up</AppText>
                  </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
