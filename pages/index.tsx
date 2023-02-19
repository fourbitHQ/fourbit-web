import HomePage from "@/components/HomePage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>fourbit</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}
