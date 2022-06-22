import getDailyEntry from '../lib/getDailyEntry';
// if (!process.env.NEXT_PUBLIC_HOST_URL) { process.env.NEXT_PUBLIC_HOST_URL = process.env.NEXT_PUBLIC_VERCEL_URL; };

export async function getStaticProps() {
  const todaysEntry = await getDailyEntry();
  return {
    props: {
      todaysEntry: JSON.stringify(todaysEntry),
    }
  }
}

export default function Home({ todaysEntry, updateDate }) {
  console.log(todaysEntry);
  const entryText = JSON.parse(todaysEntry).text;

  return (
    <h1>
          {entryText}
    </h1>
  )
}
