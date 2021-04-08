import Head from 'next/head'

import Header from '../components/Header'
import Welcome from '../components/Welcome'
import About from '../components/About'
import DownloadApp from '../components/DownloadApp'
import People from '../components/People'
import Faq from '../components/Faq'
import Store from '../components/Store'
import Footer from '../components/Footer'
import WordsRun from '../components/WordsRun'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Site ChaComigo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Welcome />
        <About />
        <DownloadApp />
        <People />
        <WordsRun />
        <Faq />
        <Store />
        <Footer />
      </main>

    </div >
  )
}
