import { useRouter } from "next/router";

export default function About() {
  const { locale } = useRouter();

  return <main>About page: {locale}</main>;
}
