import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <h1>{t("welcome")}</h1>
      <p>{t("homeParagraph")}</p>
    </div>
  );
};

export default Home;
