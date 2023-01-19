import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { useAppSelector } from "./config/store/hooks";
import { Provider } from "react-redux";
import { setupStore } from "./config/store";
import global_en from "./i18n/en/global.json";
import global_es from "./i18n/es/global.json";
const store = setupStore();

window.onbeforeunload = () => {
  const { language } = useAppSelector((state) => state.Languages);
  localStorage.setItem("@APP_LANGUAGE", language);
};
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
