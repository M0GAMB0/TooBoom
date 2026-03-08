import { router } from "expo-router";

/**
 * Navigation utility functions for the application
 */

/**
 * Navigates to the New Task screen
 */
export const navigateToNewTask = () => {
  router.push("/new-task");
};

/**
 * Navigates to the Home screen
 */
export const navigateToHome = () => {
  router.replace("/(tabs)/(home)");
};

/**
 * Generic back navigation
 */
export const goBack = () => {
  if (router.canGoBack()) {
    router.back();
  } else {
    router.replace("/(tabs)/(home)");
  }
};
