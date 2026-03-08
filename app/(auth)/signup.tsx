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

export default function SignupScreen() {
  const { colors, isDark, fontFamily } = useAppColors();
  const { login } = useAuth();
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  // Simple password strength logic
  const getPasswordStrength = () => {
    if (password.length === 0) return 0;
    if (password.length < 6) return 1;
    if (password.length < 10) return 2;
    return 3;
  };

  const strength = getPasswordStrength();
  const strengthLabels = ["", "Weak", "Medium", "Strong"];

  const handleSignup = async () => {
    if (!fullName || !email || !password || !confirmPassword) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please fill in all fields.",
      });
      return;
    }

    if (password !== confirmPassword) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Passwords do not match.",
      });
      return;
    }

    if (!agreeToTerms) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please agree to the Terms of Service.",
      });
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      login(email);
      router.replace("/(tabs)/(home)");
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
          <View className="px-6 pt-6" style={{ backgroundColor: colors.background }}>
            {/* LOGO AREA */}
            <View className="items-center mb-6">
              <View 
                className="w-16 h-16 rounded-2xl justify-center items-center shadow-lg" 
                style={{ backgroundColor: colors.primary, shadowColor: colors.primary }}
              >
                <Ionicons name="checkmark-done" size={32} color={colors.white} />
              </View>
            </View>

            {/* HEADER */}
            <View className="items-center mb-8">
              <AppText 
                className="text-3xl font-bold mb-2" 
                style={{ color: colors.text, fontFamily }}
              >
                Join Focus Planner
              </AppText>
              <AppText 
                className="text-base" 
                style={{ color: colors.secondaryText, fontFamily }}
              >
                Start your productive journey today
              </AppText>
            </View>

            {/* FORM */}
            <View className="w-full">
              {/* FULL NAME */}
              <View className="mb-4">
                <View 
                  className="border rounded-xl px-4 py-3.5"
                  style={{ backgroundColor: colors.cardBackground, borderColor: colors.borderColor }}
                >
                  <TextInput
                    placeholder="Full Name"
                    placeholderTextColor={colors.secondaryText}
                    className="text-base"
                    style={{ color: colors.text, fontFamily }}
                    value={fullName}
                    onChangeText={setFullName}
                  />
                </View>
              </View>

              {/* EMAIL */}
              <View className="mb-4">
                <View 
                  className="border rounded-xl px-4 py-3.5"
                  style={{ backgroundColor: colors.cardBackground, borderColor: colors.borderColor }}
                >
                  <TextInput
                    placeholder="Email Address"
                    placeholderTextColor={colors.secondaryText}
                    className="text-base"
                    style={{ color: colors.text, fontFamily }}
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                  />
                </View>
              </View>

              {/* PASSWORD */}
              <View className="mb-2">
                <View 
                  className="border rounded-xl flex-row items-center pr-4"
                  style={{ backgroundColor: colors.cardBackground, borderColor: colors.borderColor }}
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
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons
                      name={showPassword ? "eye-off" : "eye"}
                      size={20}
                      color={colors.secondaryText}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* STRENGTH INDICATOR */}
              <View className="mb-4">
                <View className="flex-row gap-1 mb-1">
                  {[1, 2, 3, 4].map((i) => (
                    <View
                      key={i}
                      className="flex-1 h-1.5 rounded-full"
                      style={{ 
                        backgroundColor: strength >= i ? colors.primary : colors.borderColor
                      }}
                    />
                  ))}
                </View>
                <AppText 
                  className="text-xs" 
                  style={{ color: colors.secondaryText, fontFamily }}
                >
                  Strength: <AppText className="font-bold">{strengthLabels[strength] || "None"}</AppText>
                </AppText>
              </View>

              {/* CONFIRM PASSWORD */}
              <View className="mb-6">
                <View 
                  className="border rounded-xl px-4 py-3.5"
                  style={{ backgroundColor: colors.cardBackground, borderColor: colors.borderColor }}
                >
                  <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor={colors.secondaryText}
                    secureTextEntry={!showPassword}
                    className="text-base"
                    style={{ color: colors.text, fontFamily }}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                  />
                </View>
              </View>

              {/* TERMS CHECKBOX */}
              <View className="flex-row items-start mb-8 mr-2">
                <TouchableOpacity
                  className="w-5 h-5 rounded-md border mr-3 mt-0.5 justify-center items-center"
                  style={{ 
                    borderColor: colors.borderColor,
                    backgroundColor: agreeToTerms ? colors.primary : colors.cardBackground
                  }}
                  onPress={() => setAgreeToTerms(!agreeToTerms)}
                >
                  {agreeToTerms && (
                    <Ionicons name="checkmark" size={14} color={colors.white} />
                  )}
                </TouchableOpacity>
                <AppText 
                  className="flex-1 text-sm leading-5" 
                  style={{ color: colors.secondaryText, fontFamily }}
                >
                  By creating an account, I agree to the{" "}
                  <AppText className="font-semibold" style={{ color: colors.primary }}>Terms of Service</AppText> and{" "}
                  <AppText className="font-semibold" style={{ color: colors.primary }}>Privacy Policy</AppText>.
                </AppText>
              </View>

              {/* SIGNUP BUTTON */}
              <TouchableOpacity
                className="rounded-xl py-4 items-center shadow-lg"
                style={{ backgroundColor: colors.primary, shadowColor: colors.primary }}
                onPress={handleSignup}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator color={colors.white} />
                ) : (
                  <AppText 
                    className="text-lg font-bold" 
                    style={{ color: colors.white, fontFamily }}
                  >
                    Create Account
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
                  OR CONTINUE WITH
                </AppText>
                <View className="flex-1 h-px" style={{ backgroundColor: colors.borderColor }} />
              </View>

              {/* SOCIAL LOGIN */}
              <View className="flex-row justify-between gap-4 mb-10">
                <TouchableOpacity 
                  className="flex-1 flex-row items-center justify-center border rounded-xl py-3"
                  style={{ backgroundColor: colors.cardBackground, borderColor: colors.borderColor }}
                >
                  <Ionicons name="logo-google" size={18} color="#EA4335" />
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
                  <Ionicons name="logo-apple" size={18} color={isDark ? colors.white : "#000"} />
                  <AppText 
                    className="ml-2 text-sm font-semibold" 
                    style={{ color: colors.text, fontFamily }}
                  >
                    Apple
                  </AppText>
                </TouchableOpacity>
              </View>

              {/* LOGIN LINK */}
              <View className="items-center mb-10">
                <AppText 
                  className="text-sm" 
                  style={{ color: colors.secondaryText, fontFamily }}
                >
                  Already have an account?{" "}
                  <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
                    <AppText className="font-bold" style={{ color: colors.primary }}>Log in</AppText>
                  </TouchableOpacity>
                </AppText>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
