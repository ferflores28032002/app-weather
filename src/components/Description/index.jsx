import { useTranslation } from "react-i18next";

export const Description = () => {
  const { t } = useTranslation("global");

  return (
    <div className="flex justify-center mt-6 w-[200px]">
          <ul className="border-l-2 pl-2 text-gray-900 text-xs w-48 h-32">
            <li className="mb-2 mt-5">
              {/* {t("card.MaxTemp")}:{" "}
              {(forecast[0]?.main.temp_max - 273.15).toFixed(1)}ºC */}
              Temperature Max: 56
            </li>
            <li className="mb-2">
              {/* {t("card.Min-Temp")}:{" "}
              {(forecast[0]?.main.temp_min - 273.15).toFixed(1)}ºC */}
               Temperature Min: 56
            </li>
            <li className="mb-2">
              {/* {t("card.Humidity-Status")}: {forecast[0]?.main.humidity}% */}
              Humidity: 56
            </li>
            <li className="mb-0">
              {/* {t("card.Wind-Speed")}: {forecast[0]?.wind.speed}m/s */}
              Wind speed: 56
            </li>
          </ul>
        </div>
  );
};
