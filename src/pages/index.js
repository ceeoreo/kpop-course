import Head from 'next/head';
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Link from 'next/link';
import NavBar from '../components/NavBar';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>NCT- The Course</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
    </>
  )
}
