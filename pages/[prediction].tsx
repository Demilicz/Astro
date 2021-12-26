
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import data from './data';

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

  console.log(link);



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



export const Prediction = ({ prediction }: InferGetStaticPropsType<typeof getStaticProps>) => {

  console.log(prediction);


  return (
    <div>
      {prediction.description}
    </div>
  )
}

export default Prediction;
