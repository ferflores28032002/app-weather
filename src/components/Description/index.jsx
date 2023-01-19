import { useTranslation } from "react-i18next";

export const Description = () => {
  const { t } = useTranslation("global");

  return (
    <div className="flex justify-center mt-8 w-[200px] shadow-2xl bg-white rounded">
      <ul className="border-l-2 pl-2 text-gray-500 text-xs w-48 h-32">
        <li className="mb-2 mt-5">
          {t("MaxTemp")}:
          {/* {(forecast[0]?.main.temp_max - 273.15).toFixed(1)}ºC */}
          34
        </li>
        <li className="mb-2">
          {t("Min-Temp")}:{" "}
          {/* {(forecast[0]?.main.temp_min - 273.15).toFixed(1)}ºC */}
          45
        </li>
        <li className="mb-2">
          {t("HumidityStatus")}: 45%
          {/* {t("card.Humidity-Status")}: {forecast[0]?.main.humidity}% */}
          12
        </li>
        <li className="mb-0">
          {t("WindSpeed")}: 45m/s
          {/* {t("card.Wind-Speed")}: {forecast[0]?.wind.speed}m/s */}
          88
        </li>
      </ul>
    </div>
  );
};
