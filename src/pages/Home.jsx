import { useEffect } from "react";
import { Header } from "../components/Header";
import { WeatherInformation } from "../components/weatherInformation/Index";

const Home = () => {
  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";
    const { language } = useAppSelector((state) => state.Languages);
    localStorage.setItem("@APP_LANGUAGE", language);
  };
  useEffect(() => {
    window.addEventListener("beforeunload", (e) => alertUser(e));
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-indigo-800">
      <Header />

      <div className="shadow-2xl w-[24rem]  bg-white  z-50">
        <WeatherInformation />
      </div>
    </div>
  );
};

export default Home;
