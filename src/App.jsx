import React from "react";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/lib/integration/react";
import { SplashScreen } from "./components/SplashScreen/Index";
import { setupStore } from "./config/store";
import i18next, { init18next } from "./i18n";
import Home from "./pages/Home";

const store = setupStore();
const persistor = persistStore(store);

const onBeforeLift = async () => {
  setTimeout( async () => { 
    await init18next();
  }, 3000);
  
};

export const App = () => {
  return (
    // <React.StrictMode>
      <Provider store={store}>
        <PersistGate
          loading={<SplashScreen />}
          persistor={persistor}
          onBeforeLift={onBeforeLift}
        >
          <I18nextProvider i18n={i18next}>
            <Home />
          </I18nextProvider>
        </PersistGate>
      </Provider>
    // </React.StrictMode>
  );
};
