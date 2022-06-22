import Head from 'next/head';
import Featured from '../components/Featured';
import PizzaList from '../components/PizzaList';
import getDailyEntry from '../lib/getDailyEntry';
// if (!process.env.NEXT_PUBLIC_HOST_URL) { process.env.NEXT_PUBLIC_HOST_URL = process.env.NEXT_PUBLIC_VERCEL_URL; };



export default function Home({ todaysEntry, updateDate }) {
  console.log(todaysEntry);
  const entryText = JSON.parse(todaysEntry).title;

  return (
    <>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
      {entryText}
    </>
  )
}


export async function getStaticProps() {
  const todaysEntry = await getDailyEntry();
  return {
    props: {
      todaysEntry: JSON.stringify(todaysEntry),
    }
  }
}