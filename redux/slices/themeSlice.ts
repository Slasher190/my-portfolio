import { createSlice, createAction, PrepareAction } from "@reduxjs/toolkit";

type ThemeType = "light" | "dark";

interface ThemeState {
  theme: ThemeType;
}

let preferredTheme: ThemeType = "light";

if (typeof window !== "undefined") {
  preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

let defaultTheme: ThemeType = preferredTheme;

if (typeof window !== "undefined" && localStorage.getItem("theme")) {
  defaultTheme = localStorage.getItem("theme") as ThemeType;
  localStorage.setItem("theme", defaultTheme);
}

const initialState: ThemeState = {
  theme: defaultTheme,
};

export const setTheme = createAction<PrepareAction<ThemeType>>(
  "theme/setTheme",
  (theme: ThemeType) => {
    localStorage.setItem("theme", theme);
    return {
      payload: theme,
    };
  }
);

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setTheme, (state, action) => {
      state.theme = action.payload;
    });
  },
});

export default themeSlice.reducer;
