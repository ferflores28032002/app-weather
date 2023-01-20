import React from "react";
import { useTranslation } from "react-i18next";
import { WeatherResponse } from "../../../shared/models/WeatherResponse";
import { FormatWeatherDate } from "../../../shared/utils/dateUtil";
import Icons from "../../../shared/utils/Icons";

interface Props {
    data: WeatherResponse;
  }

export const ForecastPreview = (props:Props) => {
    const { data } = props;
    const weatherDate = data?.list[0].dt;
    const weatherNow = data?.list[0].weather[0];
    const values = data?.list[0].main;


return(
<div className="w-[300px] pl-10 md:shrink-0 md:h-full md:w-48">
<p className="text-gray-900 text-3xl font-semibold">{data?.city?.name}</p>
<p className="text-base pt-1 text-gray-900 font-semibold">
{weatherDate ? FormatWeatherDate(weatherDate) : null}
</p>

<p className="text-xl pr-8 pt-1 text-gray-900 font-extrabold capitalize">
    {weatherNow?.description}
</p>

<div className="grid grid-cols-2 gap-2 w-[100px] md:max-w-2xl">
  <p className="text-xl mt-4 text-amber-500 font-extrabold">
   {(values?.temp - 273.15).toFixed(1)}&deg;
  </p>
  <img
    src={Icons(weatherNow?.main)}
    alt="icon" 
    className="w-2/2 mt-2 drop-shadow-md"
  />
</div>
</div>
 );
};