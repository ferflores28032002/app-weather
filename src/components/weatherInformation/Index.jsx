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
      <input
        type="text"
        placeholder={t("formSearch")}
        name="search"
        onKeyDown={handleSubmit}
        className="w-full outline-none border-none py-4 px-3 text-sm shadow-lg"
      />

      <h1 className="text-center text-3xl text-gray-600 pt-8">Nicaragua</h1>

      <div className="flex items-center justify-center gap-x-4 min-h-15rem">
        {loading ? (
          <Loading />
        ) : (
          <>
            <h1 className="text-5xl text-gray-500">12&deg;</h1>

            <img className="w-52 " src={Icons("Clear")} alt="icon" />
          </>
        )}
      </div>

      <div>
        <div className="flex py-2 items-center bg-indigo-700 justify-around text-white text-sm">
          <button onClick={() => setSearch(t("city.city1"))}>
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
          </button>
        </div>

        <div className="bg-indigo-700 text-white text-3xl w-full min-h-[7rem] flex items-center justify-center gap-2">
          <h1>23&deg;|</h1>
          <h1>45&deg;</h1>
        </div>
      </div>
    </div>
  );
};
