import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../config/store/hooks";
import { selectLanguage } from "../../store/LangSlice";

export const Header = () => {
  const { i18n } = useTranslation("global");

  const { language } = useAppSelector((state) => state.Languages);
  const dispatch = useAppDispatch();

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("@APP_LANGUAGE", language);
  }, [language]);

  return (
    <div className="absolute right-10 top-3 flex w-20 md:w-24 gap-4">
      <button className="mr-2" onClick={() => dispatch(selectLanguage("es"))}>
        <img
          className={`${
            language === "es" ? "opacity-100" : "opacity-50"
          } hover:animate-bounce`}
          src="es.png"
          alt="es"
        />
      </button>
      <button className="mr-2" onClick={() => dispatch(selectLanguage("en"))}>
        <img
          className={`${
            language === "en" ? "opacity-100" : "opacity-50"
          } hover:animate-bounce`}
          src="en.png"
          alt="en"
        />
      </button>
    </div>
  );
};
