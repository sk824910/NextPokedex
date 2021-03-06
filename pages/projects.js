import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import style from "../styles/Card.module.css";
import React, { useEffect, useState } from "react";


const { ethers } = require("ethers");






async function enableMeta(){
// A Web3Provider wraps a standard Web3 provider, which is
// what Metamask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

// The Metamask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
await provider.send("eth_requestAccounts", []);
const signer = provider.getSigner();
const address = signer.getAddress();
console.log("Account:", await signer.getAddress());
return address;
}




export default function Home(address) {


  return (
    <div>
      <div className={style.container}>
        <div className={style.content}>
          <h1>Ethereum Address</h1>
          <h3>
            Steven keashon test
          </h3>
        </div>
        <div className={style.flap}></div>
      </div>
      <div className={styles.container1}>
        <button onClick={enableMeta}>Connect to your Wallet</button>
      </div>
    </div>
  );
}
