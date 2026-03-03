import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import themeReducer from "./themeSlice";
import todoReducer from "./todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    categories: categoryReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
