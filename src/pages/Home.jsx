import { useTranslation } from "react-i18next";
import { Header } from "../components/Header";

const Home = () => {
  const { t } = useTranslation("global");

  return (
    <div className="relative">
      <h1>{t("formSearch")}</h1>
      <Header />
    </div>
  );
};

export default Home;
