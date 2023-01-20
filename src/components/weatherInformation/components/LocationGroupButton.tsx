import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
  setSearch: (value) => void;
}

export const LocationGroupButton = (props: Props) => {
  const { setSearch } = props;
  const { t } = useTranslation("global");
  const locations = [t("city.city1"), t("city.city2"), t("city.city3")];

  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      {locations.map((location) => {
        return (
          <button
            key={location}
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
            onClick={ () => setSearch(location)}
         >
            {location}
          </button>
        );
      })}
    </div>
  );
};
