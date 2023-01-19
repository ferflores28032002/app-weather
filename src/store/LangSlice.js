import { createSlice } from "@reduxjs/toolkit";

export const langSlice = createSlice({
  name: "lang",
  initialState: {
    language: localStorage.getItem("@APP_LANGUAGE") ?? "en",
  },
  reducers: {
    selectLanguage: (state, value) => {
      state.language = value.payload;
    },
  },
});

export const { selectLanguage } = langSlice.actions;

export default langSlice.reducer;