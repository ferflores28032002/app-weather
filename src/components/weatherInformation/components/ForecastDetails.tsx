import React from "react";
import { useTranslation } from "react-i18next";
import { WeatherResponse } from "../../../shared/models/WeatherResponse";

interface Props {
  data: WeatherResponse;
}

export const ForecastDetails = (props:Props) => {
  const{data} = props;
  const { t } = useTranslation("global");
  const forecast = data?.list ? data?.list: []; 

  return (  
    <div className="flex justify-center mt-4 w-[280px] pl-4">
      <ul className="border-l-2 pl-2 text-gray-900 text-xs w-48 h-38">
        <li className="mb-2 mt-3 flex items-center pointer-events-none">
          <img src="/temp-max.svg" alt="icon" className="drop-shadow-md" />
          <p className="ml-2">{t('MaxTemp')}: {(forecast[0]?.main.temp_max - 273.15).toFixed(1)}ºC</p>
        </li>
        <li className="mb-2 flex items-center pointer-events-none">
          <img src="/temp-min.svg" alt="icon" className="drop-shadow-md" />
          <p className="ml-2">{t('MinTemp')}: {(forecast[0]?.main.temp_min - 273.15).toFixed(1)}ºC </p>
        </li>
        <li className="mb-2 flex items-center pointer-events-none">
          <img src="/humidity.svg" alt="icon" className="drop-shadow-md" />
          <p className="ml-2">{t('HumidityStatus')}: {forecast[0]?.main.humidity}%</p>
        </li>
        <li className="mb-0 flex items-center pointer-events-none">
          <img src="/wind.svg" alt="icon" className="drop-shadow-md" />
          <p className="ml-2">{t('WindSpeed')}: {forecast[0]?.wind.speed}m/s</p>
        </li>
      </ul>
    </div>
  );
};
