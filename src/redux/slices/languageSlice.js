// src/redux/slices/languageSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: localStorage.getItem("lang") || "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    // Toggle between English and Hindi
    toggleLanguage(state) {
      state.current = state.current === "en" ? "hi" : "en";
      localStorage.setItem("lang", state.current);
    },
    // Set specific language
    setLanguage(state, action) {
      state.current = action.payload;
      localStorage.setItem("lang", state.current);
    },
  },
});

// Export actions
export const { toggleLanguage, setLanguage } = languageSlice.actions;

// Export reducer
export default languageSlice.reducer;
