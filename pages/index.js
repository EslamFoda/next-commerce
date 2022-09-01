import dynamic from "next/dynamic";
import Head from "next/head";
import { getProducts } from "../services/index";
import Hero from "../comp/home/hero";
import Categories from "../comp/home/categories";
import Deals from "../comp/home/deals";
import Blog from "../comp/home/blogs";
import FollowUs from "../comp/home/followUs";
import Services from "../comp/home/services";
const BestSeller = dynamic(() => import("../comp/home/bestSeller"));
const Trending = dynamic(() => import("../comp/home/trending"));
export default function Home({ trending, bestSeller }) {
  return (
    <div>
      <Head>
        <title>Wokiee - E-commerce</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Hero /> */}
      <Categories />
      <BestSeller products={bestSeller} />
      <Deals />
      <Trending products={trending} />
      <Blog />
      <FollowUs />
      <Services />
    </div>
  );
}

export async function getStaticProps() {
  const trending = (await getProducts("Trending", 8)) || [];
  const bestSeller = (await getProducts("Best-Seller", 8)) || [];

  return { props: { trending, bestSeller } };
}
