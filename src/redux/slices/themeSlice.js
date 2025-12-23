import { createSlice } from "@reduxjs/toolkit";
import appConfig from "../../config/appConfig";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: appConfig.defaultTheme,
    title: appConfig.appName, // 👉 Navbar logo/title
  },
  reducers: {
    toggleMode(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleMode } = themeSlice.actions;
export default themeSlice.reducer;
