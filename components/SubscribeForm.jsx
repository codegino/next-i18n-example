import { useTranslation } from "next-i18next";
import React from "react";

const SubscribeForm = () => {
  const { t } = useTranslation("newsletter");

  return (
    <section>
      <h3>{t("title")}</h3>
      <h4>{t("subtitle")}</h4>

      <form>
        <input placeholder={t("form.firstName")} />
        <input placeholder={t("form.email")} />
        <button>{t("form.action.signUp")}</button>
        <button>{t("form.action.cancel")}</button>
      </form>
      <style jsx>{`
        form {
          max-width: 300px;
          display: flex;
          flex-direction: column;
        }

        input {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </section>
  );
};

export default SubscribeForm;
