import { useRouter } from "next/router";

export default function Home() {
  const { locale } = useRouter();

  return <main>Hello world: {locale}</main>;
}
