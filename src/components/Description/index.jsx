import { useTranslation } from "react-i18next";

export const Description = () => {
  const { t } = useTranslation("global");

  return (
    <div className="flex justify-center mt-4 w-[300px] pl-8">
      <ul className="border-l-2 pl-2 text-gray-900 text-xs w-48 h-32">
        <li className="mb-2 mt-3 flex items-center pointer-events-none">
          {/* {t("card.MaxTemp")}:{" "}
              {(forecast[0]?.main.temp_max - 273.15).toFixed(1)}ºC */}
          <img src="/temp-max.svg" alt="icon" className="drop-shadow-md" />
          <p className="ml-2">{t('MaxTemp')}: 56</p>
        </li>
        <li className="mb-2 flex items-center pointer-events-none">
          {/* {t("card.Min-Temp")}:{" "}
              {(forecast[0]?.main.temp_min - 273.15).toFixed(1)}ºC */}
          <img src="/temp-min.svg" alt="icon" className="drop-shadow-md" />
          <p className="ml-2">{t('MinTemp')}: 56</p>
        </li>
        <li className="mb-2 flex items-center pointer-events-none">
          {/* {t("card.Humidity-Status")}: {forecast[0]?.main.humidity}% */}
          <img src="/humidity.svg" alt="icon" className="drop-shadow-md" />
          <p className="ml-2">{t('HumidityStatus')}: 56</p>
        </li>
        <li className="mb-0 flex items-center pointer-events-none">
          {/* {t("card.Wind-Speed")}: {forecast[0]?.wind.speed}m/s */}
          <img src="/wind.svg" alt="icon" className="drop-shadow-md" />
          <p className="ml-2">{t('WindSpeed')}: 56</p>
        </li>
      </ul>
    </div>
  );
};
