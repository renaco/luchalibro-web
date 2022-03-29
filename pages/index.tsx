import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { Cover } from '../components/cover'
import { Selected } from '../components/selected'
import { Section } from '../components/section'
import data from '../data/site.json'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Christopher Vásquez</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Cover />
        {[1, 2].map((index) => <Selected key={index} />)}

        {data.movies.map((movie, index) => <Section movie={movie} key={index}/>)}

        {/* {data.movies.map((movie, index) => <div key={index}>{movie.video}</div>)} */}
      </main>

      {/* <footer className={styles.footwer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

export default Home