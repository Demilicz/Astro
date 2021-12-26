
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

import data from './dates/data';

import Head from 'next/head';

import Header from './components/header';
import Footer from './components/footer';

const contextHandler = (con: string) => {
  let sym = con.indexOf('&');
  let sign = con.slice(0, sym);
  let day = con.slice(sym + 1);
  return {sign, day }
}

export const getStaticPaths: GetStaticPaths = async () => {

  const paths = data.map( path => {
    return { params: { prediction: `${path?.sign}&${path?.day}`} }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {

  const link = context?.params?.prediction;

  let params = contextHandler(link as string);

  const res =   await fetch(
    `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${params.sign}&day=${params.day}`,
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

export const Prediction : NextPage = ({ prediction }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(prediction);

  return (
    <div>
       <Head>
          <title>Prediction | Horoscope</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header/>
      <div>{prediction.description}</div>
      <div>{prediction.date_range}</div>
      <Footer/>
    </div>
  )
}

export default Prediction;
