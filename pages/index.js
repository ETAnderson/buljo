import Head from "next/head";
import Image from "next/image";
import ControlInterface from "../components/interface/ControlInterface";

export default function Home() {
  return (
    <div>
      <Head>
        <title>buljo</title>
        <meta name="description" content="bullet journaling for people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Buljo</h1>
        {/* <Display /> */}
      </main>

      <footer>
        <ControlInterface />
      </footer>
    </div>
  );
}
