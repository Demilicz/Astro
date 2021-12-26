import type { NextPage } from 'next';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { ChangeEvent,useState } from 'react';




const Home: NextPage = () => {

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
          <Link href={`/capricorn&${day}`} key={Math.random().toString()}><a>Capricorn</a></Link>
        </li>
        <li>
          <Link href={`/aquarius&${day}`} key={Math.random().toString()}><a>Aquarius</a></Link>
        </li>
        <li>
          <Link href={`/pisces&${day}`} key={Math.random().toString()}><a>Pisces</a></Link>
        </li>
        <li>
          <Link href={`/aries&${day}`} key={Math.random().toString()}><a>Aries</a></Link>
        </li>
        <li>
          <Link href={`/taurus&${day}`} key={Math.random().toString()}><a>Taurus</a></Link>
        </li>
        <li>
          <Link href={`/gemini&${day}`} key={Math.random().toString()}><a>Gemini</a></Link>
        </li>
        <li>
          <Link href={`/cancer&${day}`} key={Math.random().toString()}><a>Cancer</a></Link>
        </li>
        <li>
          <Link href={`/leo&${day}`} key={Math.random().toString()}><a>Leo</a></Link>
        </li>
        <li>
          <Link href={`/virgo&${day}`} key={Math.random().toString()}><a>Virgo</a></Link>
        </li>
        <li>
          <Link href={`/libra&${day}`} key={Math.random().toString()}><a>Libra</a></Link>
        </li>
        <li>
          <Link href={`/scorpio&${day}`} key={Math.random().toString()}><a>Scorpio</a></Link>
        </li>
        <li>
          <Link href={`/sagittarius&${day}`} key={Math.random().toString()}><a>Sagittarius</a></Link>
        </li>
      </ul>

      <footer>copyright © 2021 . all rights reserved.</footer>
    </div>
  )
}

export default Home
