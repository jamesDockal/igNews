import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";

import { SubscribeButton } from "../components/SubscribeButton";

import styles from "./home.module.scss";
import { stripe } from "../services/stripe";

type Props = {
  product: {
    priceId: string;
    amount: number;
  };
};

const Home = ({ product }: Props) => {
  return (
    <>
      <Head>
        <title>Inicio | Ig.News</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>
            👏 <strong>Hey, welcome</strong>
          </span>
          <h1>
            News about the <span>React</span> world
          </h1>
          <p>
            Get access to all the publictions <br />
            <span> for ${product.amount} month</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1KClr6CMDRfzAdrIZsBVFVtr", {
    expand: ["product"],
  });

  const product = {
    priceId: price.id,
    amount: price.unit_amount / 100,
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
