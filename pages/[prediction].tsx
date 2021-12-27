
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

import data from './dates/data';

import Head from 'next/head';

import Header from './components/header';
import Footer from './components/footer';
import Image from 'next/image';



const contextHandler = (con: string) => {
  let sym = con.indexOf('&');
  let sign = con.slice(0, sym);
  let day = con.slice(sym + 1);
  return {sign, day }
}

const pathHandler = (con: string) => {
  let sym = con.indexOf('&');
  let sign = con.slice(0, sym);
  let upperSign = sign[0].toUpperCase() + sign.substring(1);;

  return upperSign;
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
      prediction: data,
      getPath: link
    }
  }

}

export const Prediction : NextPage = ({ prediction, getPath }: InferGetStaticPropsType<typeof getStaticProps>) => {

  console.log(prediction);



  return (
    <div >
       <Head>
          <title>Prediction | Horoscope</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header/>
      <div className='container'>
        <div className='upperContext'>
          <Image src={`/${pathHandler(getPath)}.png`} width={350} height={350} alt={`${pathHandler(getPath)}`}/>
          <h1 className='title'>{pathHandler(getPath)}</h1>
          <h3>{prediction.date_range}</h3>
        </div>
        <p className='data'>{'Current date: ' + prediction.current_date}</p>
        <p className='description'>{prediction.description}</p>
        <p className='text'>{`Lucky number on this day is ${prediction.lucky_number}. Your mood on this day is ${prediction.mood}. Today you compatible with ${prediction.compatibility}.`}</p>
      </div>
      <Footer/>
        <style jsx>{`
            .container {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;
              flex-direction:column;
            }
            .upperContext{
              margin: 60px 0;
              display: flex;
              flex-direction:column;
              align-items: center;
            }
            .title{
              font-size: 28px;
              margin-bottom:12px;
              margin-top: 28px;
            }
            .data {
              font-size: 18px;
              font-weight: 500;
              margin-bottom: 50px;
            }
            .description {
              font-size: 22px;
            }
            .text {
              font-size: 22px;
              margin-bottom: 30px;
            }
        `}</style>
    </div>
  )
}

export default Prediction;
