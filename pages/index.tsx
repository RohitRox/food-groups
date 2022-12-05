import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS 13 + Typescript + MongoDB Project: Food Groups</title>
        <meta name="description" content="Let's study food" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        Hello World!
      </main>
    </div>
  )
}
