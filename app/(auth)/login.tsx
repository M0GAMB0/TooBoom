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
  const { colors } = useAppColors();
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
    <SafeAreaView className="flex-1 bg-[#FDFBFF]" edges={["top"]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View className="px-6 pt-10 bg-[#FDFBFF]">
            {/* LOGO AREA */}
            <View className="items-center mb-8">
              <View className="w-16 h-16 rounded-2xl bg-[#F0E7FF] justify-center items-center">
                <Ionicons name="checkmark-done" size={32} color="#5B13EC" />
              </View>
            </View>

            {/* WELCOME HEADER */}
            <View className="items-center mb-10">
              <AppText className="text-3xl font-bold text-[#1E1B4B] mb-2">Welcome back</AppText>
              <AppText className="text-base text-[#64748B]">
                Please enter your details to sign in
              </AppText>
            </View>

            {/* FORM */}
            <View className="w-full">
              {/* EMAIL */}
              <View className="mb-5">
                <TextInput
                  placeholder="Email address"
                  placeholderTextColor="#94A3B8"
                  className="bg-white border border-[#E2E8F0] rounded-xl px-4 py-3.5 text-base text-[#1E1B4B]"
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
              </View>

              {/* PASSWORD */}
              <View className="mb-5">
                <View className="bg-white border border-[#E2E8F0] rounded-xl flex-row items-center">
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor="#94A3B8"
                    secureTextEntry={!showPassword}
                    className="flex-1 px-4 py-3.5 text-base text-[#1E1B4B]"
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
                      color="#94A3B8"
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
                    className={`w-5 h-5 rounded-md border border-[#E2E8F0] mr-2 justify-center items-center ${
                      rememberMe ? "bg-[#5B13EC] border-[#5B13EC]" : ""
                    }`}
                  >
                    {rememberMe && (
                      <Ionicons name="checkmark" size={14} color="#FFF" />
                    )}
                  </View>
                  <AppText className="text-sm text-[#64748B]">Remember me</AppText>
                </TouchableOpacity>

                <TouchableOpacity>
                  <AppText className="text-sm text-[#5B13EC] font-bold">Forgot password?</AppText>
                </TouchableOpacity>
              </View>

              {/* LOGIN BUTTON */}
              <TouchableOpacity
                className="bg-[#5B13EC] rounded-xl py-4 items-center shadow-lg shadow-[#5B13EC]/20"
                onPress={handleLogin}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator color="#FFF" />
                ) : (
                  <AppText className="text-white text-lg font-bold">Login</AppText>
                )}
              </TouchableOpacity>

              {/* DIVIDER */}
              <View className="flex-row items-center my-8">
                <View className="flex-1 h-px bg-[#E2E8F0]" />
                <AppText className="text-sm text-[#94A3B8] mx-3">Or continue with</AppText>
                <View className="flex-1 h-px bg-[#E2E8F0]" />
              </View>

              {/* SOCIAL LOGIN */}
              <View className="flex-row justify-between gap-4 mb-8">
                <TouchableOpacity className="flex-1 flex-row items-center justify-center border border-[#E2E8F0] rounded-xl py-3 bg-white">
                  <Ionicons name="logo-google" size={20} color="#EA4335" />
                  <AppText className="ml-2 text-sm font-semibold text-[#1E1B4B]">Google</AppText>
                </TouchableOpacity>

                <TouchableOpacity className="flex-1 flex-row items-center justify-center border border-[#E2E8F0] rounded-xl py-3 bg-white">
                  <Ionicons name="logo-apple" size={20} color="#000" />
                  <AppText className="ml-2 text-sm font-semibold text-[#1E1B4B]">Apple</AppText>
                </TouchableOpacity>
              </View>

              {/* SIGN UP LINK */}
              <View className="items-center mb-10">
                <AppText className="text-sm text-[#64748B]">
                  Don't have an account?{" "}
                  <AppText className="text-[#5B13EC] font-bold">Sign up</AppText>
                </AppText>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
