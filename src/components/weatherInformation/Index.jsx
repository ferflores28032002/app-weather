import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useWeather } from "./hooks/useWeather";
import { ToastContainer } from "react-toastify";
import { ForecastDetails } from "./components/ForecastDetails";
import { ForecastPreview } from "./components/ForecastPreview";
import { LocationSearch } from "./components/LocationSearch";
import { LocationGroupButton} from "./components/LocationGroupButton";
import { SliderForecast} from "./components/SliderForecast";
import { useAppSelector } from "../../config/store/hooks";

export const WeatherInformation = () => {
  const { t } = useTranslation("global");
  const [search, setSearch] = useState("london");
  const [getWeatherByCity, {data}  ] = useWeather();
  const [forecastData, setForeCastData] = useState(null);
  const { language } = useAppSelector((state) => state.Languages);

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
    }
  };

  useEffect(() => {
    getWeatherByCity(search, language);
  }, [search, language]);

  useEffect(() => {
    if(data){
      setForeCastData(data);
    }
    }, [data]);

  return (
    <div>
      <ToastContainer />

      <div className="flex items-center mx-2 mt-2">
        <LocationSearch handleSubmit={handleSubmit} />
      </div>

      <div className="flex py-2 items-center justify-around text-sm">
        <LocationGroupButton setSearch={setSearch} />
      </div>

      <div className="max-w-2xl  m-5 p-4 grid grid-cols-2 gap-2 md:max-w-2x ">
        <div className="md:flex ">
          <ForecastPreview  data={forecastData} />
          <ForecastDetails  data={forecastData}/>
        </div> 
      </div>

      <SliderForecast data={forecastData}/>
    </div>
  );
};


