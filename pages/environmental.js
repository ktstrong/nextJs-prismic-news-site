import Layout from "../components/Layout";

import {RichText} from "prismic-reactjs"; 
import Prismic from "prismic-javascript";
import Head from "next/head";
import { Client } from "../prismic-configuration";
import Link from "next/link";

export default function Environmental({articles, trending}) {
    return (
       
            <div>
                <Head>
                    <title>21 | Environment </title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
          
             <Layout>
            <h1 className="text-3xl uppercase font-extrabold opacity-50 mt-10 ml-14">
            {" "}
            the environmental world 
            </h1>

            <div className="flex">
            <div className="flex  flex-col w-3/5 ml-14 mr-20">
                {articles.results.map((article, index) => (
                <div className="mb-2" key={article.uid}>
                    <Link href={`article/${article.uid}`}>
                    <h1 className="font-extrabold text-3xl my-5 text-darkPink cursor-pointer">
                        {RichText.render(article.data.title)}
                    </h1>
                    </Link>

                    <img
                    src={article.data.image.url}
                    alt="img"
                    />

                    <h1 className="mt-5">
                    {" "}
                    {RichText.render(article.data.description)}
                    </h1>
                </div>
                ))}
            </div>
            <div className="flex flex-col w-1/4">
                <h1 className="text-xl uppercase font-bold opacity-50 my-10 mr-14">
                See what's trending
                </h1>

                {trending.results.map((article, index) => (
                <div key={article.uid}>
                    <Link href={`trending/${article.uid}`}>
                    <h1 className="bold text-xl mt-4 text-darkPink cursor-pointer">
                        {RichText.render(article.data.headline)}
                    </h1>
                    </Link>

                    <h1 className="mt-5">
                    {" "}
                    {RichText.render(article.data.info)}
                    </h1>

                    <hr className="mt-5" />
                </div>
                    ))}
                </div>
            </div>
        </Layout>
    </div>
    );
}


// this function is called everytime a request/refresh is made

export async function getServerSideProps() {
  const articles = await Client().query(
    Prismic.Predicates.at("document.tags", ["environmental"])
  );
  const trending = await Client().query(
    Prismic.Predicates.at("document.type", "trending")
  );

  return {
    props: {
      articles: articles,
      trending: trending,
    },
  };
}







