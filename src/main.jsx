import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { useAppSelector } from "./config/store/hooks";
import global_es from "./i18n/es/global.json";
import { setupStore } from "./config/store";
import global_en from "./i18n/en/global.json";
import Home from "./pages/Home";
const store = setupStore();

i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem("@APP_LANGUAGE") ?? "en",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <Home />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);
