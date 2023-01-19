import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { api_key, weatherApiUrl } from '../utils/configEnv';
import { WeatherResponse } from '../models/WeatherResponse'


export const weatherApi = createApi({
  reducerPath: 'weather',
  baseQuery: fetchBaseQuery({
    baseUrl: weatherApiUrl,
  }),
  endpoints: builder => ({
    getWeatherConditionByCity: builder.mutation<WeatherResponse, string>({
      query: city => `/weather?q=${city}&lang=sp&units=metric&appid=${api_key}`,
    }),
  }),
});

export const { useGetWeatherConditionByCityMutation  } = weatherApi;