import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/App.module.css";
import Card from "@/components/Card/Card";
import Clock from "@/components/Clock/Clock";

export default function App() {
  return (
    <>
      <Head>
        <title>Viva</title>
        <meta name="description" content="TM Hakkaþon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <Image
            className={styles.logo}
            src="/logo.svg"
            alt="Viva Logo"
            width={130}
            height={40}
          />
        </header>
        <section className={styles.cards}>
          <Card title="Hiti" value={22.1} metric="°C" />
          <Card title="Raki" value={58.1} metric="%" />
          <Card title="Hljóð" value={5.1} metric="dB" />
        </section>
        <p className={styles.version}>V.0.1</p>
        <Clock />
      </main>
    </>
  );
}
