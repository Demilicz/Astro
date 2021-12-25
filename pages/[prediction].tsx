
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import data from './data';



export const getStaticPaths: GetStaticPaths = async () => {

  const paths = data.map( path => {
    return { params: { prediction: `${path.sign}&${path.day}`} }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(context);

  const res =   await fetch(
    `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=capricorn&day=today`,
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

// { prediction }: InferGetStaticPropsType<typeof getStaticProps>

export const Prediction = ({ prediction }: InferGetStaticPropsType<typeof getStaticProps>) => {

  console.log(prediction);


  return (
    <div>
      lol
    </div>
  )
}

export default Prediction;
