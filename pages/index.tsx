import type { NextPage } from 'next'
import Head from 'next/head'
import { Cover } from '../components/cover'
import { Selected } from '../components/selected'
import { Section } from '../components/section'
import { Footer } from '../components/footer'
import data from '../data/site.json'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Christopher Vásquez</title>
        <meta name="description" content="Christopher Vásquez | Guionista / Scriptwriter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Cover />
        <Selected />
        <Section movies={data.movies} />
      </main>

      <Footer />
    </div>
  )
}

export default Home
