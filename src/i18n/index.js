import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { setupStore } from "../config/store";
import global_en from "./en/global.json";
import global_es from "./es/global.json";
const store = setupStore();

const resources = {
  es: {
    global: global_es,
  },
  en: {
    global: global_en,
  },
};

export const init18next = () => {
  const { language } = store.getState().Languages.language;
  const lng = language;

  return i18next.use(initReactI18next).init({
    fallbackLng: "en",
    debug: true,
    resources,
    lng,
  });
};

export default i18next;
