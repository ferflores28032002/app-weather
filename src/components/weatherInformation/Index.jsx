import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Icons from "../../shared/utils/Icons";
import { Loading } from "../../shared/utils/Loading";

export const WeatherInformation = () => {
  const { t } = useTranslation("global");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
    }
  };

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <div>
      {/* <input
        type="text"
        placeholder={t("formSearch")}
        name="search"
        onKeyDown={handleSubmit}
        className="w-full outline-none border-none py-4 px-3 text-sm shadow-lg"
      /> */}

      <form className="flex items-center mx-2 mt-2">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                // fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                // clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
            name="search"
            onKeyDown={handleSubmit}
          />
        </div>
      </form>

      <div className="flex py-2 items-center justify-around text-sm">
        {/* <button onClick={() => setSearch(t("city.city1"))}>
            {t("city.city1")}
          </button>

          <button
            className="border-x-2 px-6"
            onClick={() => setSearch(t("city.city2"))}
          >
            {t("city.city2")}
          </button>

          <button onClick={() => setSearch(t("city.city3"))}>
            {t("city.city3")}
          </button> */}
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

      <div className="max-w-2xl p-4 m-5 grid grid-cols-2 gap-2 md:max-w-2x ">
        <div className="md:flex ">
          <div className="m-2 w-[300px] md:shrink-0 mr-8 md:h-full md:w-48">
            <p className="text-gray-900 text-3xl font-semibold">Managua</p>
            <p className="text-base pt-1 text-gray-900 font-semibold">
              01/18/2023 6PM
            </p>

            <p className="text-xl pr-8 pt-1 text-gray-900 font-extrabold capitalize">
              Clear Sky
            </p>

            <div className="grid grid-cols-2 gap-2 w-40 md:max-w-2xl">
              <p className="text-xl mt-8 text-amber-500 font-extrabold">
                12&deg;
              </p>
              <img
                src={Icons("Clear")}
                alt="icon"
                className="w-2/2 drop-shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-indigo-700 text-white text-3xl w-full min-h-[7rem] flex items-center justify-center gap-2">
          <h1>23&deg;|</h1>
          <h1>45&deg;</h1>
        </div>
      </div>
    </div>
  );
};
