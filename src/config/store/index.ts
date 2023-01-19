import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import LangSlice from "../../store/LangSlice";
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
const persistConfig = {
  key: 'root',
  storage,
} 

const rootReducer = combineReducers({
  Languages: LangSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: persistedReducer,
    preloadedState,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
