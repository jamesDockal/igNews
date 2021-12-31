import React from "react";
import Head from "next/head";

import { SubscribeButton } from "../components/SubscribeButton";

import styles from "./home.module.scss";

const Home = ({}) => {
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
            <span> for $9.90 month</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
};

export default Home;
