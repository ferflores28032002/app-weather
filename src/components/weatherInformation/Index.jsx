import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Icons from "../../shared/utils/Icons";
import { useWeather } from "./hooks/useWeather";
import { ToastContainer } from "react-toastify";
import { Loading } from "../../shared/utils/Loading";
import { Description } from "../Description";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/bundle";
import { Navigation } from "swiper";

export const WeatherInformation = () => {
  const { t } = useTranslation("global");
  const [search, setSearch] = useState("london");
  const [loading, setLoading] = useState(false);
  const { data, isError, isLoading, getWeatherByCity } = useWeather();

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
    }
  };

  useEffect(() => {
    getWeatherByCity(search);
  }, [search]);

  return (
    <div>
      <ToastContainer />

      <div className="flex items-center mx-2 mt-2">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={t("formSearch")}
            required
            name="search"
            onKeyDown={handleSubmit}
          />
        </div>
      </div>

      <div className="flex py-2 items-center justify-around text-sm">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
          >
            {t("city.city1")}
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
          >
            {t("city.city2")}
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
          >
            {t("city.city3")}
          </button>
        </div>
      </div>

      <div className="max-w-2xl  m-5 p-4 grid grid-cols-2 gap-2 md:max-w-2x ">
        <div className="md:flex ">
          <div className="w-[300px] pl-16 md:shrink-0 md:h-full md:w-48">
            <p className="text-gray-900 text-3xl font-semibold">Nicaragua</p>
            <p className="text-base pt-1 text-gray-900 font-semibold">
              01/18/2023 6PM
            </p>

            <p className="text-xl pr-8 pt-1 text-gray-900 font-extrabold capitalize">
              Clear Sky
            </p>

            <div className="grid grid-cols-2 gap-2 w-[100px] md:max-w-2xl">
              <p className="text-xl mt-4 text-amber-500 font-extrabold">
                12&deg;
              </p>
              <img
                src={Icons("Clear")}
                alt="icon"
                className="w-2/2 mt-2 drop-shadow-md"
              />
            </div>
          </div>

          <Description />
        </div>
      </div>

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
            <SwiperSlide>
              <div className="max-w-lg mx-4 bg-white rounded-lg flex justify-center items-center">
                <div className="m-2 flex flex-col justify-center items-center">
                  <p className="text-gray-900 text-xs font-semibold">
                    19/1/2023 8PM
                  </p>

                  <p className="text-xs capitalize mt-2 text-gray-900 font-medium md:shrink-0 flex flex-col justify-center items-center">
                    <img
                      src={Icons("Clear")}
                      alt="icon"
                      className="w-3/1 drop-shadow-md"
                    />
                    Clear Sky
                  </p>

                  <p className="text-2xl mt-2 flex items-center text-amber-500 font-bold">
                    34ºC
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-xs mx-4 bg-white rounded-lg flex justify-center items-center">
                <div className="m-2 flex flex-col justify-center items-center">
                  <p className="text-gray-900 text-xs font-semibold">
                    19/1/2023 8PM
                  </p>

                  <p className="text-xs capitalize mt-2 text-gray-900 font-medium md:shrink-0 flex flex-col justify-center items-center">
                    <img
                      src={Icons("Clear")}
                      alt="icon"
                      className="w-3/1 drop-shadow-md"
                    />
                    Clear Sky
                  </p>

                  <p className="text-2xl mt-2 flex items-center text-amber-500 font-bold">
                    34ºC
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-xs mx-4 bg-white rounded-lg flex justify-center items-center">
                <div className="m-2 flex flex-col justify-center items-center">
                  <p className="text-gray-900 text-xs font-semibold">
                    19/1/2023 8PM
                  </p>

                  <p className="text-xs capitalize mt-2 text-gray-900 font-medium md:shrink-0 flex flex-col justify-center items-center">
                    <img
                      src={Icons("Clear")}
                      alt="icon"
                      className="w-3/1 drop-shadow-md"
                    />
                    Clear Sky
                  </p>

                  <p className="text-2xl mt-2 flex items-center text-amber-500 font-bold">
                    34ºC
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};
