import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import SubscribeForm from "../components/SubscribeForm";

export default function Home() {
  const { t } = useTranslation("home");

  return (
    <main>
      <div>{t("greeting")}</div>
      {/* Render the form here */}
      <SubscribeForm />
    </main>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "home",
        "newsletter", // Add newsletter translations
      ])),
      // Will be passed to the page component as props
    },
  };
}
