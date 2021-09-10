import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Steven Keashon</title>
        <meta name="description" content="Next Web App" />
        <link rel="icon" href="/download.ico" />
      </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome</h1>

          <p className={styles.text}>
            Get started by editing{" "}
            <code className={styles.code}>pages/index.js</code>
          </p>
        </main>

        <footer className={styles.footer}></footer>

    </div>
  );
}
