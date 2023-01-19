import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../config/store/hooks";
import { switchLang } from "../../store/LangSlice";

export const Header = () => {
  const { i18n } = useTranslation("global");

  const { language } = useAppSelector((state) => state.Languages);
  const dispatch = useAppDispatch();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div className="absolute right-10 top-3 flex w-20 md:w-24 gap-4">
      <button onClick={() => dispatch(switchLang("Es"))}>
        <img src="es.png" alt="Es" />
      </button>

      <button onClick={() => dispatch(switchLang("En"))}>
        <img src="en.png" alt="En" />
      </button>
    </div>
  );
};
