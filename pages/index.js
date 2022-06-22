import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Temporal } from '@js-temporal/polyfill';
import { useState } from 'react';
import TimeUntil from '../Components/TimeUntil';
import getDailyEntry from '../lib/getDailyEntry';
import { BASE_URL } from '../lib/BASE_URL';
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
