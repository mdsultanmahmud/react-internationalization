import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("contact_title")}</h1>
      <p>{t("contact")}</p>
    </div>
  );
};

export default Contact;
