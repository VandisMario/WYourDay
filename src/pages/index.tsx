import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Valja´s Rustapp</title>
        <meta name="description" content="Created by Valja for your daily W's" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <div className={styles.sidebar}>
          <div>
            <a>
              <p>Home</p>
            </a>
          </div>
          <div>
            <a>
              <p>Take a Quest</p>
            </a>
          </div>
          <div>
            <a>
              <p>Goal Tracker</p>
            </a>
          </div>
          <div>
            <a>
              <p>About</p>
            </a>
          </div>
        </div>


        <div className={styles.content}>

          {/* 
          <div className={styles.description}>
            <div>
              This App was made in place for the bad WPF Bill Gates conspiracy
            </div>
            <p>
              By Joe Biden
            </p>
          </div> */}

          <div className={styles.tableOC}>
            <div>
              <p>
                Monday
              </p>
            </div>
            <div>
              <p>
                Tuesday
              </p>
            </div>
            <div>
              <p>
                Wednesday
              </p>
            </div>
            <div>
              <p>
                Thursday
              </p>
            </div>
            <div>
              <p>
                Friday
              </p>
            </div>
            <div>
              <p>
                Saturday
              </p>
            </div>
            <div>
              <p>
                Sunday
              </p>
            </div>
            <div>
              + Hier add button
            </div>
          </div>



        </div>

        {/* <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div> */}
        {/* 
        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Shit features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div> */}
      </main>
    </>
  )
}
