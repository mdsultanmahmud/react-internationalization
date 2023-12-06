import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <h1>{t("about_title")}</h1>
      <p>{t("about")}</p>
    </div>
  );
};

export default About;
