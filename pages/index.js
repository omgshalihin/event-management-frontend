/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Evently Social | Home</title>
        <meta name="keywords" content="home" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to
          {' '}
          <a href="https://nextjs.org">Evently Social.</a>
        </h1>
        <div className={styles.description}>
          <h2>
            The Super App for Stockholm's largest event community
          </h2>
          <h3>Make new friends with available profiles and find your event hopping buddies here</h3>
        </div>
        <div className={styles.landingLogo}>
          <Image className="logo--landing" href="/" src="/justin_landing.jpg" width={1000} height={1000} alt="logo" />
        </div>
        <div className={styles.grid}>
          <h2 className={styles.title}>
            Event:
            {' '}
            <a href="https://nextjs.org">Justice World Tour</a>
          </h2>
          <h2 className={styles.title}>
            Date:
            {' '}
            <a href="https://nextjs.org">15 March 2023</a>
          </h2>
          <h2 className={styles.title}>
            Location:
            {' '}
            <a href="https://nextjs.org">Tele2 Arena</a>
          </h2>
        </div>
        <Link href="/form" className="btn">Attend</Link>

      </main>
    </div>
  );
}
