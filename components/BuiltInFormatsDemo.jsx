import { useTranslation } from "next-i18next";
import React from "react";

const BuiltInFormatsDemo = () => {
  const { t } = useTranslation("built-in-demo");

  return (
    <div>
      <p>
        {t("number", {
          val: 123456789.0123,
        })}
      </p>
      <p>
        {t("currency", {
          val: 123456789.0123,
          style: "currency",
          currency: "USD",
        })}
      </p>

      <p>
        {t("dateTime", {
          val: new Date(1234567890123),
          formatParams: {
            val: {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            },
          },
        })}
      </p>

      <p>
        {t("relativeTime", {
          val: 12,
          style: "long",
        })}
      </p>

      <p>
        {t("list", {
          val: t("weekdays", { returnObjects: true }),
        })}
      </p>
    </div>
  );
};

export default BuiltInFormatsDemo;
