import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/bundle";
import { Navigation } from "swiper";
import { useTranslation } from "react-i18next";
import Icons from "../../../shared/utils/Icons";
import { WeatherResponse } from "../../../shared/models/WeatherResponse";
import { FormatWeatherDate } from "../../../shared/utils/dateUtil";

interface Props {
  data: WeatherResponse;
}

export const SliderForecast = (props:Props) => {
  const {data} = props;
  const forecastList = data?.list ? data?.list.slice(1) : [];
  const { t } = useTranslation("global");

  return (
    <div className="w-full min-h-[3rem] bg-indigo-900 px-4 pb-4 md:max-w-2xl ">
      <div className="pt-2 pb-2 pl-4">
        <p className="text-white text-lg font-semibold">{t("forecasts")}</p>
      </div>
  
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={0}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
        }}
        className="mySwiper"
      >
        <div className="max-w-2xl max-h-48 md:max-w-2xl">
          {forecastList.map(item => {
            return (
              <SwiperSlide key={item.dt}>
              <div className="max-w-lg mx-4 h-[160px] bg-white rounded-lg flex justify-center items-center">
                <div className="m-2 flex flex-col justify-center items-center">
                  <p className="text-gray-900 text-xs font-semibold">
                  {item.dt? FormatWeatherDate(item.dt) : null}
                  </p>
    
                  <img
                      src={Icons(item.weather[0].main)}
                      alt="icon"
                      className="w-[60px] [60px] drop-shadow-md" />
                      
                  <div className="text-xs capitalize mt-2 text-gray-900 font-medium md:shrink-0 flex flex-col justify-center items-center">
                    
                    {item.weather[0].description}
                  </div>
    
                  <p className="text-2xl mt-2 flex items-center text-amber-500 font-bold">
                    {(item.main.temp - 273.15).toFixed(1)}ºC
                  </p>
                </div>
              </div>
            </SwiperSlide>
            )
          })}
        
        </div>
      </Swiper>
    </div>
  );
};

