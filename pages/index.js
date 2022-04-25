import Head from 'next/head'
import Image from 'next/image'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Header from '../src/components/Header'
import Navbar from '../src/components/Navbar'
import Projects from '../src/components/Projects'
import Skills from '../src/components/Skills'
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={styles.home}>
        <Header></Header>
        <div className={styles.content}>
        <About></About>
       <Projects></Projects>
         <Skills></Skills>
        </div>
        <Contact></Contact>
      </div>
    </div>
  )
}
