import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { api_key, weatherApiUrl } from '../utils/configEnv';
import { WeatherResponse } from '../models/WeatherResponse'
import { WeatherParamRequest } from '../models/WeatherParamRequest';

export const weatherApi = createApi({
  reducerPath: 'weather',
  baseQuery: fetchBaseQuery({
    baseUrl: weatherApiUrl,
  }),
  endpoints: builder => ({
    getWeatherConditionByCity: builder.mutation<WeatherResponse, WeatherParamRequest>({
      query: param => `/forecast?q=${param.city}&lang=${param.language === 'es'? 'sp' : 'en'}&appid=${api_key}`,
    }),
  }),
});

export const { useGetWeatherConditionByCityMutation  } = weatherApi;