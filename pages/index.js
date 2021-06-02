import Head from "next/head";
import Layout from "../components/Layout";

import Prismic from "prismic-javascript";
import {Client} from "../prismic-configuration";
import { GiCogLock } from "react-icons/gi";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>inside layout</Layout> 
    </div>
  )
}


// this function is called everytime a request/refresh is made.

export async function getServerSideProps () {
  const articles = await Client().query(
    Prismic.Predicates.at("document.type", "article")
  );

  console.log(articles);

  return {
    props : {},
  };
}
