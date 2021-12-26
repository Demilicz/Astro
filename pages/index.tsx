import type { NextPage } from 'next';

import Head from 'next/head';

import Header from './components/header';
import Day from './components/day';
import Sings from './components/signs';
import Footer from './components/footer';

import {  useState } from 'react';




const Home: NextPage = () => {

  const [day, setDay] = useState('today');

  return (
    <div>
      <Head>
          <title>Home | Horoscope</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header/>
      <Day setDay={setDay} />
      <Sings day={day}/>
      <Footer/>

    </div>
  )
}

export default Home
