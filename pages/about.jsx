import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function About({ message }) {
  return <h1>{message}</h1>;
}

export async function getStaticProps({ locale }) {
  const { message } = await fetch(
    // forward the locale value to the server via query params
    `https://next-i18n-example-cg.vercel.app/api/about?lang=${locale}`
  ).then((res) => res.json());

  return {
    props: {
      message,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
