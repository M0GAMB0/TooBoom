import {
    logout as logoutAction,
    restoreAuth,
    setCredentials,
    setLoading as setLoadingAction,
} from "@/src/redux/authSlice";
import { RootState } from "@/src/redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    const loadAuth = async () => {
      try {
        const savedUser = await AsyncStorage.getItem("user");
        if (savedUser) {
          dispatch(restoreAuth(JSON.parse(savedUser)));
        } else {
          dispatch(restoreAuth(null));
        }
      } catch (error) {
        console.error("Failed to load auth state:", error);
        dispatch(restoreAuth(null));
      }
    };
    loadAuth();
  }, [dispatch]);

  const login = (email: string) => {
    const user = { email };
    dispatch(setCredentials({ user }));
  };

  const logout = () => {
    dispatch(logoutAction());
  };

  const setLoading = (loading: boolean) => {
    dispatch(setLoadingAction(loading));
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    setLoading,
  };
};
