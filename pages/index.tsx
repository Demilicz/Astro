import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { InferGetStaticPropsType } from 'next';


import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { ChangeEvent, InputHTMLAttributes, ReactEventHandler, useState } from 'react';


export const getStaticProps: GetStaticProps = async () => {

  const res =   await fetch(
    "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=capricorn&day=today",
    {
    "method": "POST",
    "headers": {
      "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY
    }
  });

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      prediction: data
    }
  }

}

//{ prediction }: InferGetStaticPropsType<typeof getStaticProps>


const Home: NextPage = ({ prediction }: InferGetStaticPropsType<typeof getStaticProps>) => {
console.log(prediction);

  const [day, setDay] = useState('today');

  const onChangeDay = ( e: ChangeEvent) => {

    const target = e.target as HTMLSelectElement;

    setDay(target.value);

  }

  return (
    <div>
      <Head>
          <title>Home | Horoscope</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <h1>Daily Horoscope</h1>

      <select name="day" onChange={onChangeDay} id="day">
        <option value="today">Today</option>
        <option value="yesterday">Yesterday</option>
        <option value="tomorrow">Tomorrow</option>
      </select>

      <h2>choose your sign</h2>

      <ul>
        <li>
          <Link href='#'>Capricorn</Link>
        </li>
        <li>
          <Link href='#'>Aquarius</Link>
        </li>
        <li>
          <Link href='#'>Pisces</Link>
        </li>
        <li>
          <Link href='#'>Aries</Link>
        </li>
        <li>
          <Link href='#'>Taurus</Link>
        </li>
        <li>
          <Link href='#'>Gemini</Link>
        </li>
        <li>
          <Link href='#'>Cancer</Link>
        </li>
        <li>
          <Link href='#'>Leo</Link></li>
        <li>
          <Link href='#'>Virgo</Link>
        </li>
        <li>
          <Link href='#'>Libra</Link>
        </li>
        <li>
          <Link href='#'>Scorpio</Link>
        </li>
        <li>
          <Link href='#'>Sagittarius</Link>
        </li>
      </ul>

      <footer>copyright © 2021 . all rights reserved.</footer>
    </div>
  )
}

export default Home
