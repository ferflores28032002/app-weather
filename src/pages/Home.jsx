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
    <div className="relative min-h-screen flex items-center justify-center ">
      <Header />

        <div className="max-w-lg shadow-2xl grid grid-cols-1 gap-1 relative flex justify-center items-center max-h-full bg-white z-50 rounded-md mt-10 ml-2 mr-2 ">
          <WeatherInformation />
        </div>
        
    </div>
  );
};

export default Home;
