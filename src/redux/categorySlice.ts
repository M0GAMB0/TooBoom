import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Category {
  label: string;
  value: string;
  color?: string;
}

interface CategoryState {
  categories: Category[];
}

const initialState: CategoryState = {
  categories: [
    { label: "Work", value: "Work", color: "#6366f1" },
    { label: "Personal", value: "Personal", color: "#a855f7" },
    { label: "Shopping", value: "Shopping", color: "#ec4899" },
  ],
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<Category>) => {
      state.categories.push(action.payload);
    },
  },
});

export const { addCategory } = categorySlice.actions;
export default categorySlice.reducer;
