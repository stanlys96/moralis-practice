import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Collection from "../components/Collection";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { marketplaceRepo } from "../helpers/marketplace-repo";

export default function Home() {
  useEffect(() => {
    console.log(marketplaceRepo.getAll(), "<<< get static props");
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>NFT Marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/marketplace.ico" />
      </Head>
      <Collection />
    </div>
  );
}
