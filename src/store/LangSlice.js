import { createSlice } from "@reduxjs/toolkit";

export const langSlice = createSlice({
  name: "lang",
  initialState: {
    language: localStorage.getItem("@APP_LANGUAGE") ?? "en",
  },
  reducers: {
    switchLang: (state) => {
      if (state.language === "en") {
        state.language = "es";
      } else {
        state.language = "en";
      }
    },
  },
});

export const { switchLang } = langSlice.actions;

export default langSlice.reducer;
