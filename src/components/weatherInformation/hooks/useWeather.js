import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useGetWeatherConditionByCityMutation } from "../../../shared/services/Weather.services";

export const useWeather = () => {

    const [getWeatherConditionByCity, { data, isLoading, isError }] = useGetWeatherConditionByCityMutation(); 

    const {t } = useTranslation('global')

    useEffect(() => {
        if(isError) {
            toast.info(t('NotFound'), {
                position: 'top-center'
            })
        }
    }, [isError])

    const getWeatherByCity = async (search, language) => {
        await getWeatherConditionByCity({city: search, language})  
    } 

    return [
        getWeatherByCity,
       {data, 
        isLoading,
        isError
       }
    ]
}